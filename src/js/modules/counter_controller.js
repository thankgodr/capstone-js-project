export default class CounterController {
   lastCount

   countChildren(parent = document, className = '') {
     const allChildren = parent.getElementsByClassName(className);
     this.lastCount = allChildren.length;
     return this.lastCount;
   }
}