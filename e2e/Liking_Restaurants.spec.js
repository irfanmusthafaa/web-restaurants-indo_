Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('#/like');
});

const firstCondition = "You don't have any Favorite Cafe or Restaurant";

Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#restaurants');
    I.see(firstCondition, '#restaurants');
    // I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});