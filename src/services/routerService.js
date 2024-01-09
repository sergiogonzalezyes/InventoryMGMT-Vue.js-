export class RouterService {
    constructor(router) {
      this.router = router;
    }
  
    navigateTo(route) {
      this.router.push(`/${route}`);
    }
  }