# JPetStore Dogs - Golden Retriever Checkout Test Senaryosu

## Amaç

Dogs kategorisinde Golden araması yaparak ilk ürünün sepete eklenmesini ve checkout sırasında giriş formunun gösterilmesini doğrulamak.

## Önkoşullar

- JPetStore Demo erişilebilir olmalıdır.
- Kullanıcı oturum açmamış olmalıdır.

## Test Adımları

1. `https://jpetstore.aspectran.com/` adresini aç.
2. **Dogs** menüsüne tıkla.
3. Sayfadaki **Search** alanına tıkla.
4. `Golden` yazıp Enter tuşuna bas.
5. Arama sonuçlarında listelenen **Golden Retriever** ürününe tıkla.
6. Ürün detayındaki ilk item için **Add to Cart** butonuna tıkla.
7. Sepette **Proceed to Checkout** butonuna tıkla.
8. Giriş ekranının görüntülendiğini doğrula.

## Beklenen Sonuç

- Dogs kategorisi açılır.
- `Golden` araması **Golden Retriever** ürününü listeler.
- Ürün detayındaki ilk item sepete eklenir.
- Checkout sırasında kullanıcı adı ve parola alanları ile **Login** butonu bulunan giriş formu gösterilir.

## Doğrulama Notu

Akış sırasında ilk item `EST-32` (Golden Retriever Puppy) sepete eklendi. **Proceed to Checkout** işlemi `/account/signonForm?referer=/order/newOrderForm` adresindeki giriş sayfasını açtı. Bu görünüm modal değil, ayrı bir giriş sayfasıdır.
