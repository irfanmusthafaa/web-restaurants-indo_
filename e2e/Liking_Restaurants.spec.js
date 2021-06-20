const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
    I.amOnPage('/#/like');
});


Scenario('showing empty liked restaurants', ({ I }) => {
    I.seeElement('#query');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    // Buka halaman utama
    I.amOnPage('/');

    // lihat card restaurant pertama dan klik untuk ke detail
    I.seeElement('.restaurant__title a');
    const firstCard = locate('.restaurant__title a').first();
    const firstCardTitle = await I.grabTextFrom(firstCard);
    I.click(firstCard);

    // like restaurant di detail
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // kembali ke halaman fav dan bandingakan dg restaurant yg diklik
    I.amOnPage('/#/like');
    I.seeElement('.restaurant-item');
    const likedCardTitle = await I.grabTextFrom('.restaurant__title a');

    assert.strictEqual(firstCardTitle, likedCardTitle);
});

Scenario('unliking one restaurant', async({ I }) => {
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

    // Buka halaman utama
    I.amOnPage('/');

    // lihat card restaurant pertama dan klik untuk ke detail
    I.seeElement('.restaurant__title a');
    const firstCard = locate('.restaurant__title a').first();
    const firstCardTitle = await I.grabTextFrom(firstCard);
    I.click(firstCard);

    // like restaurant di detail
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // kembali ke halaman fav dan bandingakan dg restaurant yg diklik
    I.amOnPage('/#/like');
    I.seeElement('.restaurant__title a');
    const likedCardTitle = await I.grabTextFrom('.restaurant__title a');
    assert.strictEqual(firstCardTitle, likedCardTitle);

    // klik card restaurant yg ada di fav
    I.click(likedCardTitle);

    // unlike restaurant yang ada di fav
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // cek halaman fav dan berhasil hapus (unlike)
    I.amOnPage('/#/like');
    I.see('Tidak ada restaurant untuk ditampilkan', '.restaurant-item__not__found');

});