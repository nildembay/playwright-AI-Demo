import { expect, test } from '@C:\Users\nilde\tests/test';

test('Dogs aramasindan ilk Golden Retriever itemini sepete ekleyince login formu acilir', async ({
  page,
}) => {
  await page.goto('https://jpetstore.aspectran.com/', {
    waitUntil: 'domcontentloaded',
  });

  const dogsLink = page
    .getByRole('heading', { name: 'Dogs', level: 4 })
    .getByRole('link', { name: 'Dogs', exact: true });
  await expect(dogsLink).toBeVisible();
  await dogsLink.click();

  await expect(page).toHaveURL(/\/categories\/DOGS$/);
  await expect(page.getByRole('heading', { name: 'Dogs', level: 3 })).toBeVisible();

  const searchBox = page.getByRole('searchbox', { name: 'Search', exact: true });
  await expect(searchBox).toBeVisible();
  await searchBox.click();
  await searchBox.fill('Golden');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/\/catalog\/searchProducts\?keyword=Golden$/);
  await expect(
    page.getByRole('heading', { name: 'Search Results for "Golden"', level: 3 }),
  ).toBeVisible();

  const goldenRetrieverRow = page
    .getByRole('row')
    .filter({ hasText: 'Golden Retriever' });
  await expect(goldenRetrieverRow).toHaveCount(1);
  await expect(goldenRetrieverRow).toBeVisible();
  await goldenRetrieverRow
    .getByRole('link', { name: 'K9-RT-01', exact: true })
    .click();

  await expect(page).toHaveURL(/\/products\/K9-RT-01$/);
  await expect(
    page.getByRole('heading', { name: 'Golden Retriever', level: 3 }),
  ).toBeVisible();

  const firstItemRow = page.getByRole('table').getByRole('row').nth(1);
  await expect(firstItemRow).toBeVisible();
  const addToCartLink = firstItemRow.getByRole('link', {
    name: 'Add to Cart',
    exact: true,
  });
  await expect(addToCartLink).toBeVisible();
  await addToCartLink.click();

  await expect(page).toHaveURL(/\/cart\/viewCart$/);
  await expect(
    page.getByRole('heading', { name: 'Shopping Cart', level: 3 }),
  ).toBeVisible();
  await expect(page.getByRole('table').getByRole('row').nth(1)).toContainText(
    'Golden Retriever',
  );

  await page.getByRole('link', { name: 'Proceed to Checkout', exact: true }).click();

  await expect(page).toHaveURL(
    /\/account\/signonForm\?referer=.*order\/newOrderForm/,
  );
  await expect(
    page.getByRole('heading', {
      name: 'Please enter your username and password.',
    }),
  ).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username:' })).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password:' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login', exact: true })).toBeVisible();
});
