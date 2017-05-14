module app.productDetail {
    interface IProductDetail {
        title: string,
        product:app.domain.IProduct
    }

    //interface for fethcing routeParams
    interface IProductParams extends ng.route.IRouteParamsService {
        productId: number;
    }

    class ProductDetailCtrl implements IProductDetail {
        title: string;
        product: app.domain.IProduct;

        static $inject = ["$routeParams","dataAccessService"];
        constructor(private $routeParams:IProductParams, private dataAccessService:app.common.DataAccessService) {
            this.title = "Product Detail";

            var id = $routeParams.productId;
            //Call the service and get the data
            var productResource = dataAccessService.getProductResource();
            productResource.get({productId:id},(data: app.domain.IProduct) => {
                this.product = data;
            });
        }
    }

    angular.module("productManagement")
        .controller("productDetailCtrl", ProductDetailCtrl);
}