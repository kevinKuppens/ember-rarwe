import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | star-rating', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });
    this.set('rating', 4);
    // eslint-disable-next-line prettier/prettier
    this.set('updateRating', () => { });

    await render(
      hbs`<StarRating @rating={{this.rating}} @onUpdate={{this.updateRating}}/>`
    );

    assert
      .dom('[data-test-rr="full-star"]')
      .exists({ count: 4 }, 'The right amount of full star is rendered');
    assert
      .dom('[data-test-rr="empty-star"]')
      .exists({ count: 1 }, 'The right count of empty stars is rendered');

    this.set('rating', 2);
    assert
      .dom('[data-test-rr="full-star"]')
      .exists({ count: 2 }, 'The right amount of full star exist after update');
    assert
      .dom('[data-test-rr="empty-star"]')
      .exists(
        { count: 3 },
        'The right amount of empty stars exist after update'
      );
  });

  test('Calls onUpdate with the correct value', async function (assert) {
    this.set('rating', 2);
    this.set('updateRating', (rating) => {
      assert.step(`Updated to rating : ${rating}`);
    });
    await render(hbs`
      <StarRating
        @rating={{this.rating}}
        @onUpdate={{this.updateRating}}
      />
      `);
    await click('[data-test-rr="star-rating-button"]:nth-child(4)');
    assert.verifySteps(['Updated to rating : 4']);
  });
});
