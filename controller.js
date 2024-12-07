  //controller
  
  class NumberLineController {
  
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.dragged = false;
    }

    handleMousePressed(mouseX, mouseY) {
        const d = dist(mouseX, mouseY, this.model.pointX, this.model.pointY);
        if(d < this.model.snappingRange){
            this.dragged = true;
        }
    }

    handleMouseDragged(mouseX){
        if(this.dragged){
            this.model.pointX = constrain(mouseX, this.model.start, this.model.end);
        }
    }

    handleMouseReleased(){
        this.dragged = false;
    }

    //handle reset button to reset to 0
    handleReset() {
        this.model.pointX = this.model.mapValueToPixel(0);
    }

    updateAndDraw(){
        background(200);
        this.view.drawNumberLine();
        this.view.drawPoint();
        const nearestValue = this.model.snapToNearest();
        this.view.displayNearestValue(nearestValue);
    }
  }