/**
 * Every photograph on the site, resolved in one place.
 *
 * Static imports rather than `/public` paths: Next derives intrinsic width,
 * height and a blur placeholder at build time, so nothing shifts as images
 * load. Content files elsewhere refer to these by key (a plain string) so
 * they stay free of import noise — `photo("warehouse")` resolves it.
 *
 * Sources and licence: src/assets/images/CREDITS.md
 */

import accounting from "@/assets/images/accounting.jpg";
import aiAutomation from "@/assets/images/ai-automation.jpg";
import analyticsDashboard from "@/assets/images/analytics-dashboard.jpg";
import cityTowers from "@/assets/images/city-towers.jpg";
import dashboardScreen from "@/assets/images/dashboard-screen.jpg";
import datacenter from "@/assets/images/datacenter.jpg";
import deskDevices from "@/assets/images/desk-devices.jpg";
import devDesks from "@/assets/images/dev-desks.jpg";
import healthcare from "@/assets/images/healthcare.jpg";
import launchCelebration from "@/assets/images/launch-celebration.jpg";
import manufacturing from "@/assets/images/manufacturing.jpg";
import meetingNotes from "@/assets/images/meeting-notes.jpg";
import mobileLaptop from "@/assets/images/mobile-laptop.jpg";
import officeSpace from "@/assets/images/office-space.jpg";
import posTerminal from "@/assets/images/pos-terminal.jpg";
import presentation from "@/assets/images/presentation.jpg";
import retailStore from "@/assets/images/retail-store.jpg";
import screenReview from "@/assets/images/screen-review.jpg";
import notesLaptop from "@/assets/images/notes-laptop.jpg";
import teamCollaboration from "@/assets/images/team-collaboration.jpg";
import warehouse from "@/assets/images/warehouse.jpg";
import workshop from "@/assets/images/workshop.jpg";

export const images = {
  accounting,
  "ai-automation": aiAutomation,
  "analytics-dashboard": analyticsDashboard,
  "city-towers": cityTowers,
  "dashboard-screen": dashboardScreen,
  datacenter,
  "desk-devices": deskDevices,
  "dev-desks": devDesks,
  healthcare,
  "launch-celebration": launchCelebration,
  manufacturing,
  "meeting-notes": meetingNotes,
  "mobile-laptop": mobileLaptop,
  "notes-laptop": notesLaptop,
  "office-space": officeSpace,
  "pos-terminal": posTerminal,
  presentation,
  "retail-store": retailStore,
  "screen-review": screenReview,
  "team-collaboration": teamCollaboration,
  warehouse,
  workshop,
};

/** Resolve an image key to its imported asset. Throws loudly on a typo. */
export function photo(key) {
  const img = images[key];
  if (!img) throw new Error(`Unknown image key: "${key}"`);
  return img;
}
