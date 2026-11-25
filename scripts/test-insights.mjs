import assert from 'node:assert/strict';
import { test } from 'node:test';
import { selectInsights } from '../src/utils/insight-filter.mjs';

const posts = Array.from({ length: 15 }, (_, index) => ({
  title: `Insight ${index}`, category: index % 2 ? 'Credit' : 'Technology',
  description: index === 3 ? 'Renewable energy' : '', spotlight: index === 4,
}));

test('six regular posts, then six more, excluding the fixed spotlight', () => {
  const first = selectInsights(posts);
  assert.equal(first.spotlight, posts[4]);
  assert.equal(first.cards.length, 6);
  assert.equal(first.total, 14);
  assert.ok(!first.cards.includes(first.spotlight));
  assert.equal(first.hasMore, true);
  const second = selectInsights(posts, [], '', 12);
  assert.equal(second.cards.length, 12);
  assert.deepEqual(second.cards.slice(0, 6), first.cards);
  const last = selectInsights(posts, [], '', 18);
  assert.equal(last.cards.length, 14);
  assert.equal(last.hasMore, false);
});
test('category and search combine without replacing the spotlight', () => {
  const result = selectInsights(posts, ['Credit'], '  RENEWABLE  ');
  assert.equal(result.total, 1);
  assert.equal(result.spotlight, posts[4]);
  assert.deepEqual(result.cards, [posts[3]]);
  assert.equal(result.hasMore, false);
});
test('multiple categories, no results, and empty content', () => {
  assert.equal(selectInsights(posts, ['Credit', 'Technology']).total, 14);
  assert.equal(selectInsights(posts, ['Missing']).total, 0);
  assert.equal(selectInsights(posts, [], 'No matching title').spotlight, posts[4]);
  assert.deepEqual(selectInsights(posts, [], 'No matching title').cards, []);
  assert.equal(selectInsights([]).spotlight, undefined);
  assert.equal(selectInsights([]).hasMore, false);
});
test('six regular posts do not show load more; seven do', () => {
  assert.equal(selectInsights(posts.slice(0, 7)).hasMore, false);
  assert.equal(selectInsights(posts.slice(0, 8)).hasMore, true);
});

test('type and business filters intersect and search includes business', () => {
  const articles = [
    {title: 'Spotlight', category: 'Legacy', postType: 'Article', business: 'Special Situation', spotlight: true},
    {title: 'First', category: 'Legacy', postType: 'Blog', business: 'Private Credit'},
    {title: 'Second', category: 'Legacy', postType: 'Report', business: 'Private Credit'},
    {title: 'Third', category: 'Legacy', postType: 'Blog', business: 'Investment Banking'},
  ];
  const result = selectInsights(articles, ['Blog'], '', 6, ['Private Credit']);
  assert.equal(result.spotlight, articles[0]);
  assert.equal(result.total, 1);
  assert.equal(selectInsights(articles, [], 'banking').total, 1);
});

test('fallback spotlight stays fixed through filters and pagination', () => {
  const articles = posts.map(({ spotlight, ...article }) => article);
  assert.equal(selectInsights(articles, ['Credit'], '', 12).spotlight, articles[0]);
  assert.equal(selectInsights(articles, [], 'Insight 0').total, 0);
  assert.equal(selectInsights([articles[0]]).cards.length, 0);
  assert.equal(selectInsights([articles[0]]).hasMore, false);
});
