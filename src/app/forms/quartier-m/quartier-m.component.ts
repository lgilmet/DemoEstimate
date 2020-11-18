import { Component, OnInit } from '@angular/core';
import { ThemePalette } from "@angular/material/core";
declare var $: any;
@Component({
  selector: 'app-quartier-m',
  templateUrl: './quartier-m.component.html',
  styleUrls: ['./quartier-m.component.scss']
})
export class QuartierMComponent implements OnInit {
// variables
popoverContent: string = "Unobstructed water view";
popoverContent1: string = "Practicaly unlivable";
popoverContent2: string = "Old carpet, Old wallpaper, Old vinyl";
popoverContent3: string = "Parquet flooring, old melamine, basic faucets";
popoverContent4: string =
  "Wood floor, melamine cabinets, melamine countertops";
popoverContent5: string = "Wood floor, melamine cabinets, stone countertops";
popoverContent6: string =
  "Wood floor, thermoformed or wood cabinets, kitchen island";
popoverContent7: string =
  "Custom kitchen with island, open shower, high quality windows";
popoverContent8: string =
  "Custom kitchen, high quality tiles, wall toilets, designer faucets";
popoverContent9: string =
  "Designer's kitchen, luxury appliances, very high quality flooring and tiles";
popoverContent10: string = "Incredible layout with incredible products";
popoverContent12: string =
  "A terrace is a balcony that is over 5 foot wide, and at least 35 sq/foot";

type: string;
livingArea: number;
quality: string;
nbWashrooms: string;
nbBedrooms: string;
nbPowder: boolean;
level: string;
waterfront: boolean;


indivise: string;
garage: boolean;
alle: boolean;
pscSud: boolean;
rooftop: boolean;
terrasse: boolean;
bordure: boolean;
noisySt: boolean;

park: boolean;


loft: boolean;
estimate: string;

formatter;
localStr: string;

color: ThemePalette = "primary";

leSaviezVous: any[] = [
  { icon: "rooftop", price: 70693, desc: "Terrasse sur le toit" },
  { icon: "garage", price: 35523, desc: "Garage" },
  { icon: "bathtub", price: 40299, desc: "Salle de bain" },
];

constructor() {}

ngOnInit() {
  this.formatter = new Intl.NumberFormat("fr-CA", {
    style: "currency",
    currency: "CAD",
  });

  this.clearForm();

  this.leSaviezVous.forEach((item) => {
    item.price = this.formatter.format(item.price);
  });
}

getBedrooms(option: number) {
  switch (option) {
    case 1:
      return 0;
    case 2:
      return 35564;
    case 3:
      return 2 * 35623;

    default:
      break;
  }
}

info(event) {
  console.log(event.clientX / window.innerWidth);
}
getQuality(option: number) {
  switch (option) {
    case 1:
      return 42823;
    case 2:
      return 2 * 42823;
    case 3:
      return 3 * 42823;
    case 4:
      return 4 * 42823;
    case 5:
      return 5 * 42823;
    case 6:
      return 6 * 42823;
    case 7:
      return 7 * 42823;
    case 8:
      return 8 * 42823;
    case 9:
      return 9 * 47823;
    case 10:
      return 10 * 50823;

    default:
      break;
  }
}
getLevel(option: string) {
  switch (option) {
    case "above":
      return 0;
    
    case "basement":
      return 1 * -39398;
    case "rdc":
      return 1 * -6522;

    default:
      break;
  }
}

computeEstimate() {
  this.estimate = this.formatter.format(
    Math.round(
      (this.livingArea * 3483.37) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 42511 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          
          Number(this.rooftop) * 71363 +
          Number(this.terrasse) * 22456 +
          Number(this.waterfront) * 120048 +
          Number(this.bordure) * 16675 +
          
          Number(this.noisySt) * -41767 +
          
          Number(this.indivise) * -42025 +
          Number(this.garage) * 37952 +
          Number(this.alle) * 8699 +
          Number(this.pscSud) * -15413 +
          
          Number(this.park) * 39348 +
          Number(this.loft) * 39802 +
          -73929 +
          -27869
    )
  );
}

checkForm() {
  if (this.livingArea == null) {
    document.getElementById("areaInput").classList.add("border-danger");
    return false;
  } else {
    document.getElementById("areaInput").classList.remove("border-danger");
    return true;
  }
}

showResult() {
  this.computeEstimate();
  $("#collapseExample").collapse("show");
  setTimeout(() => {
    window.scrollTo(0, document.body.scrollHeight);
  }, 500);
}

clearForm() {
  $("#collapseExample").collapse("hide");
  // reset all itputs
  this.type = "condo";
  this.livingArea = null;
  this.quality = "5";
  this.nbBedrooms = "1";
  this.nbWashrooms = "1";
  this.level = "above";
  this.bordure = false;
  this.rooftop = false;
  this.pscSud = false;
  this.waterfront = false;
  this.alle = false;
  this.terrasse = false;
  
  this.indivise = "0";
  this.garage = false;
  this.noisySt = false;
  
  this.nbPowder = false;
  
  this.park = false;
  this.loft = false;
}
getTotal() {
  if (this.checkForm()) this.showResult();
  else window.scrollTo(0, 0);
}
}
