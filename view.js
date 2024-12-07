
        //view
        class NumberLineView{
  
            constructor(model){
                this.model = model;
            }
    
            drawNumberLine(){
    
                //straight line on X & Y co-ordinate
                stroke(0);
                strokeWeight(1);
                line(this.model.start, this.model.pointY, this.model.end, this.model.pointY);
    
                //tick lines and number lable
                for(let i= -this.model.range; i<=this.model.range; i++){
                    const x = this.model.mapValueToPixel(i);
                    line(x, this.model.pointY - 10, x, this.model.pointY + 10);
                    fill(0);
                    textAlign(CENTER, CENTER);
                    text(i, x, this.model.pointY + 20);
                }
    
            }
    
            drawPoint(){
                fill(255, 0, 0);
                noStroke();
                ellipse(this.model.pointX, this.model.pointY, 15);
            }
    
    
            displayNearestValue(nearestValue){
                fill(0);
                textSize(16);
                textAlign(CENTER, CENTER);
                text(nearestValue, width/2, this.model.pointY - 40)
            }
          }