"use client";

import { useEffect, useRef } from "react";

/**
 * The animated wireframe-mesh background. Hero only — see theme.md
 * "Hero background: animated wireframe mesh" for the tunables.
 *
 * Two stacked canvases:
 *   #bands — three blurred ribbons of --band, the soft colour underneath
 *   #mesh  — two families of hairlines sampled off one shared wave surface,
 *            crossing to produce the moiré wireframe
 *
 * Differences from the standalone prototype, all lifecycle concerns:
 *   - the loop stops when the hero scrolls out of view, so it costs nothing
 *     while the rest of the page is on screen
 *   - the palette is cached and re-read on theme change instead of running
 *     getComputedStyle twice per frame
 *   - resize is observed on the hero element, not just the window
 */
export function HeroMesh() {
  const hostRef = useRef(null);
  const meshRef = useRef(null);
  const bandsRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const mesh = meshRef.current;
    const bands = bandsRef.current;
    if (!host || !mesh || !bands) return;

    const mctx = mesh.getContext("2d");
    const bctx = bands.getContext("2d");
    if (!mctx || !bctx) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const scheme = window.matchMedia("(prefers-color-scheme: dark)");

    let W = 0;
    let H = 0;
    let frame = 0;
    let visible = true;
    let palette = readPalette();

    function readPalette() {
      const cs = getComputedStyle(document.documentElement);
      const read = (name) => cs.getPropertyValue(name).trim();
      const attr = document.documentElement.dataset.theme;
      const dark =
        attr === "dark" || (attr !== "light" && scheme.matches);
      return {
        line: read("--line"),
        lineAlpha: parseFloat(read("--line-alpha")) || 0.16,
        band: read("--band"),
        bandAlpha: parseFloat(read("--band-alpha")) || 0.1,
        dark,
      };
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = host.clientWidth;
      H = host.clientHeight;
      for (const [canvas, ctx] of [
        [mesh, mctx],
        [bands, bctx],
      ]) {
        canvas.width = Math.max(1, Math.round(W * dpr));
        canvas.height = Math.max(1, Math.round(H * dpr));
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }
    }

    /* A draped surface: height is the sum of three slow sine waves. Both line
       families sample it, so they agree about where the fabric folds. */
    function surface(x, y, t) {
      const nx = x / W;
      const ny = y / H;
      return (
        Math.sin(nx * 4.2 + t * 0.35 + ny * 1.5) * 42 +
        Math.sin(nx * 9.0 - t * 0.22 + ny * 3.0) * 16 +
        Math.sin(ny * 6.0 + t * 0.18 + nx * 2.0) * 22
      );
    }

    function drawMesh(t) {
      mctx.clearRect(0, 0, W, H);
      const { line, lineAlpha } = palette;
      mctx.lineWidth = 0.7;

      // Family A: horizontal-ish lines, packed tighter toward the bottom.
      const rowsA = 46;
      const stepX = 8;
      for (let i = 0; i < rowsA; i++) {
        const u = i / (rowsA - 1);
        const baseY = H * (0.35 + Math.pow(u, 1.35) * 0.75);
        const fade = 0.35 + 0.65 * u; // fainter at the top
        mctx.strokeStyle = `rgba(${line},${lineAlpha * fade})`;
        mctx.beginPath();
        for (let x = -20; x <= W + 20; x += stepX) {
          const y = baseY + surface(x, baseY, t) * (0.6 + u * 0.8);
          if (x === -20) mctx.moveTo(x, y);
          else mctx.lineTo(x, y);
        }
        mctx.stroke();
      }

      // Family B: slanted lines off the same surface, offset so they cross A.
      const rowsB = 40;
      const stepY = 8;
      mctx.strokeStyle = `rgba(${line},${lineAlpha * 0.7})`;
      for (let i = 0; i < rowsB; i++) {
        const u = i / (rowsB - 1);
        const baseX = -W * 0.3 + u * W * 1.6;
        mctx.beginPath();
        let first = true;
        for (let y = H * 0.25; y <= H + 20; y += stepY) {
          const lean = (y - H) * 0.55; // slants left as it rises
          const x = baseX + lean + surface(baseX, y, t * 0.9 + 1.7) * 0.9;
          if (first) mctx.moveTo(x, y);
          else mctx.lineTo(x, y);
          first = false;
        }
        mctx.stroke();
      }
    }

    const strokes = [
      { y: 0.3, amp: 0.1, thick: 0.2, ph: 0.0, k: 1.6, sp: 0.2 },
      { y: 0.48, amp: 0.08, thick: 0.14, ph: 2.1, k: 2.2, sp: -0.15 },
      { y: 0.7, amp: 0.12, thick: 0.26, ph: 4.0, k: 1.3, sp: 0.12 },
    ];

    /* Soft translucent ribbons sweeping across, like folded silk behind the mesh. */
    function drawBands(t) {
      bctx.clearRect(0, 0, W, H);
      const { band, bandAlpha, dark } = palette;

      for (const s of strokes) {
        bctx.beginPath();
        for (let x = -60; x <= W + 60; x += 16) {
          const nx = x / W;
          const y =
            H * (s.y + Math.sin(nx * s.k * Math.PI + s.ph + t * s.sp) * s.amp);
          if (x === -60) bctx.moveTo(x, y);
          else bctx.lineTo(x, y);
        }
        bctx.strokeStyle = `rgba(${band},${bandAlpha})`;
        bctx.lineWidth = H * s.thick;
        bctx.lineCap = "round";
        bctx.stroke();

        // A lighter sheen down each fold reads as silk in light mode.
        if (!dark) {
          bctx.strokeStyle = `rgba(255,255,255,${bandAlpha * 4})`;
          bctx.lineWidth = H * s.thick * 0.35;
          bctx.stroke();
        }
      }
    }

    function render(t) {
      drawBands(t);
      drawMesh(t);
    }

    function loop(now) {
      render(now / 1000);
      frame = requestAnimationFrame(loop);
    }

    function start() {
      if (frame) return;
      if (motion.matches) {
        render(0);
        return;
      }
      frame = requestAnimationFrame(loop);
    }

    function stop() {
      if (!frame) return;
      cancelAnimationFrame(frame);
      frame = 0;
    }

    resize();
    start();

    const onResize = () => {
      resize();
      // A resized canvas is blank until something draws into it.
      if (motion.matches || !visible) render(0);
    };

    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(host);

    // Don't burn frames animating a hero that has scrolled away.
    const visibility = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) start();
        else stop();
      },
      { threshold: 0 },
    );
    visibility.observe(host);

    const refreshPalette = () => {
      palette = readPalette();
      if (motion.matches || !visible) render(0);
    };

    // The toggle writes data-theme on <html>; the media query covers "no
    // explicit choice, OS flipped".
    const themeObserver = new MutationObserver(refreshPalette);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    scheme.addEventListener("change", refreshPalette);

    const onMotionChange = () => {
      stop();
      start();
    };
    motion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      resizeObserver.disconnect();
      visibility.disconnect();
      themeObserver.disconnect();
      scheme.removeEventListener("change", refreshPalette);
      motion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <div ref={hostRef} className="pointer-events-none absolute inset-0" aria-hidden="true">
      <canvas
        ref={bandsRef}
        className="absolute inset-0 h-full w-full blur-[28px]"
      />
      <canvas ref={meshRef} className="absolute inset-0 h-full w-full" />
      {/* Keeps the copy readable over the mesh: horizontal on desktop,
          vertical on mobile where the text sits above it. */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,var(--bg)_0%,color-mix(in_srgb,var(--bg)_55%,transparent)_60%,transparent_100%)] md:bg-[linear-gradient(90deg,var(--bg)_0%,color-mix(in_srgb,var(--bg)_60%,transparent)_45%,transparent_75%)]" />
    </div>
  );
}
