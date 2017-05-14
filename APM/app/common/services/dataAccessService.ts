module app.common {
    interface IDataAccessService {
        getProductResource(): ng.resource.IResourceClass<IProductResource>;
    }

    //Therefore, our IProduct interface extends the IResource interface
    interface IProductResource extends ng.resource.IResource<app.domain.IProduct> {

    }

    export class DataAccessService implements IDataAccessService {

        //To ensure we are safe for minification, we'll use $inject
        static $inject = ["$resource"];
        //All external pieces will get injected via constructor
        constructor(private $resource: ng.resource.IResourceService) {
        }

        getProductResource() :ng.resource.IResourceClass<IProductResource> {
            return this.$resource("/api/products/:productId");
        }
    }

    //Service Registration
    angular.module("common.services")
        .service("dataAccessService", DataAccessService);
        
}