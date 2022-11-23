export default class CounterController{
    countChildren(parent = document, className = ""){
       const allChildren =  parent.getElementsByClassName(className)
        return allChildren.length
    }
}