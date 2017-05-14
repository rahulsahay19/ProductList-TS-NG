module app.domain {
    //export keyword helps to access the types outside Typescript module
   export interface IProduct {
        productId: number;
        productName: string;
        productCode: string;
        releaseDate: Date;
        price: number;
        description: string;
        imageUrl: string;
        calculateDiscount(percent: number): number;
    }

   export class Product implements IProduct {

        //This is typical way of writing any class. However, with this when props grow, it can become cumbersome
        //Hence, to cut short, we can just use public access modifier which can handle this shortcut
        //constructor(productName: string) {
        //    this.productName = productName;
        constructor(
            public productId: number,
            public productName: string,
            public productCode: string,
            public releaseDate: Date,
            public price: number,
            public description: string,
            public imageUrl: string) {
        }
        //So, all logic should be placed here in domain class implementation rather than angular code
        calculateDiscount(percent: number): number {
            return this.price - (this.price * percent / 100);
        }
    }

}
