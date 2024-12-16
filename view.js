
//view
class NumberLineView {

    constructor(model) {
        this.model = model;
    }

    drawNumberLine() {

        //straight line on X & Y co-ordinate
        stroke(0);
        strokeWeight(1);
        line(this.model.start, this.model.pointY, this.model.end, this.model.pointY);

        //tick lines and number lable
        for (let i = -this.model.range; i <= this.model.range; i++) {
            const x = this.model.mapValueToPixel(i);
            line(x, this.model.pointY - 10, x, this.model.pointY + 10);
            fill(0);
            textAlign(CENTER, CENTER);
            text(i, x, this.model.pointY + 20);
        }

    }

    drawPoint() {
        fill(255, 0, 0);
        noStroke();
        ellipse(this.model.pointX, this.model.pointY, 15);
    }


    drawArrow() {
        const centerValue = this.model.snapToNearest();
        const additionValue = centerValue + 6;
        const subtractionValue = centerValue - 6;

        const additionPixel = this.model.mapValueToPixel(additionValue);
        const subtractionPixel = this.model.mapValueToPixel(subtractionValue);
        const centerPixel = this.model.mapValueToPixel(centerValue);

   
    //draw addition line and arrow

        stroke(0, 200, 0);
        strokeWeight(2);

        if (additionValue > this.model.range) {
            line(centerPixel, this.model.pointY, this.model.end, this.model.pointY);
            fill(0, 200, 0);

            triangle(this.model.end, this.model.pointY, this.model.end - 10, this.model.pointY - 5, this.model.end - 10, this.model.pointY + 5);


        }
        else {
            line(this.model.pointX, this.model.pointY, additionPixel, this.model.pointY);
            fill(0, 200, 0);
            triangle(additionPixel, this.model.pointY, additionPixel - 10, this.model.pointY - 5, additionPixel - 10, this.model.pointY + 5);

        }


        //draw subtraction line and arrow
        stroke(200, 0, 0);
        strokeWeight(2);
        if (subtractionValue < -this.model.range) {
            line(centerPixel, this.model.pointY, this.model.start, this.model.pointY);
            fill(200, 0, 0);
            triangle(this.model.start, this.model.pointY, this.model.start + 10, this.model.pointY + 5, this.model.start + 10, this.model.pointY - 5);

        }
        else {
            line(this.model.pointX, this.model.pointY, subtractionPixel, this.model.pointY);
            fill(200, 0, 0);
            triangle(subtractionPixel, this.model.pointY, subtractionPixel + 10, this.model.pointY + 5, subtractionPixel + 10, this.model.pointY - 5);

        }



        //dislying the addition and subtraction value

        //ADDITION
        fill(221, 255, 221)
        stroke(0);
        rect(100, this.model.pointY + 50, 250, 80);

        fill(0);
        noStroke();
        textSize(16);
        textAlign(LEFT, CENTER);
        text(`Addition : ${centerValue} + 6 = ${additionValue}`, 120, this.model.pointY + 90);


        //Subtraction
        fill(255, 221, 221)
        stroke(0)
        rect(450, this.model.pointY + 50, 250, 80);

        fill(0);
        noStroke();
        textSize(16);
        textAlign(LEFT, CENTER);
        text(`Subtraction : ${centerValue} - 6 = ${subtractionValue}`, 470, this.model.pointY + 90);

    }



    displayNearestValue(nearestValue) {
        fill(0);
        textSize(16);
        textAlign(CENTER, CENTER);
        text(nearestValue, width / 2, this.model.pointY - 40)
        //console.log(nearestValue);
    }
}