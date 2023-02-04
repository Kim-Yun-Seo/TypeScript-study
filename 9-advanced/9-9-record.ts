{
  type PageInfo = {
    title: string;
  }

  type Page = 'home' | 'about' | 'contact';

  const nav: Record<Page, PageInfo> = {
    //page를 키로 pageINfo를 밸류로 엮어줌.

    home: {title: 'Home'},
    about: {title: 'About'},
    contact: {title: 'Contact'},
  }

  type Product = 'cat' | 'dog';
  type NewProduct = Capitalize<Product>; //'Cat' | 'Dog';
  //대문자로 나옴..
}