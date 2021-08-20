/* eslint-disable prettier/prettier */
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandSongs extends Route {
    @service catalog;

    queryParams = {
        sortBy: {
            as: 's',
        },
        searchTerms: {
            as: 'q',
        },
    };
    async model() {
        let band = this.modelFor('bands.band');
        await this.catalog.fetchRelated(band, 'songs');
        return band;
        // await Promise.reject();
    }

    // setupController(controller) {
    //     super.setupController(...arguments);
    //     controller.set('band', this.modelFor('bands.band'));
    // }
    resetController(controller) {
        controller.title = '';
        controller.showAddSong = true;
    }
}