/* eslint-disable prettier/prettier */
import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
    links(ressource) {
        let { id, modelName } = ressource;
        if (modelName === 'band') {
            return {
                songs: {
                    related: `/bands/${id}/songs`,
                    self: `/bands/${id}/relationships/songs`,
                }
            }
        }
    }
});
