/* eslint-disable prettier/prettier */
import { click, fillIn } from "@ember/test-helpers";

export async function createBand(name) {
    await click('[data-test-rr="new-band-button"]');
    await fillIn('[data-test-rr="new-band-name"]', name);
    await click('[data-test-rr="save-band-button"]');
}