import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";

declare var $: any;
@Component({
  selector: "app-quartier-k",
  templateUrl: "./quartier-k.component.html",
  styleUrls: ["./quartier-k.component.scss"],
})
export class QuartierKComponent implements OnInit {
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
  bordure: boolean;
  rooftop: boolean;
  terrasse: boolean;
  
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
        return 35504;
      case 3:
        return 2 * 33941;

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
        return 41968;
      case 2:
        return 2 * 41968;
      case 3:
        return 3 * 41968;
      case 4:
        return 4 * 41968;
      case 5:
        return 5 * 41968;
      case 6:
        return 6 * 41968;
      case 7:
        return 7 * 41968;
      case 8:
        return 8 * 41968;
      case 9:
        return 9 * 51968;
      case 10:
        return 10 * 55968;

      default:
        break;
    }
  }
  getLevel(option: string) {
    switch (option) {
      case "above":
        return 0;
      
      case "basement":
        return 1 * -39147;
      case "rdc":
        return 1 * -7672;

      default:
        break;
    }
  }

  computeEstimate() {
    this.estimate = this.formatter.format(
      Math.round(
        (this.livingArea * 3507.37) / 10.764 +
          this.getQuality(Number(this.quality)) +
          Number(this.nbWashrooms) * 40288 +
          this.getBedrooms(Number(this.nbBedrooms)) +
          this.getLevel(this.level) +
          
          Number(this.rooftop) * 70693 +
          Number(this.terrasse) * 23366 +
          Number(this.waterfront) * 122720 +
          Number(this.bordure) * 16526 +
          
          Number(this.noisySt) * -40866 +
          
          Number(this.indivise) * -40898 +
          Number(this.garage) * 35523 +
          
          Number(this.park) * 38449 +
          Number(this.loft) * 38095 +
          -65368
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
    this.waterfront = false;
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
