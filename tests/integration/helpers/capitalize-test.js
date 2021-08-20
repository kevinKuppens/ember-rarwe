import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Helper | capitalize', function (hooks) {
  setupRenderingTest(hooks);

  test('It capitalizes each word', async function (assert) {
    this.set('title', 'seven nation army');
    await render(hbs`{{capitalize this.title}}`);
    assert.dom(this.element).hasText('Seven Nation Army');

    this.set('title', 'MVC');
    assert.dom(this.element).hasText('MVC');
  });
});
