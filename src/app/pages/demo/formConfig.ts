import { FormGroup, FormControl, Validators } from "@angular/forms";

let featureList: any[] = [
    "noisi Street", "terrasse"
];

// let features: any[] = featureList.map(x => x = { x: new FormControl() });
const config: FormGroup = new FormGroup(
    {
        "superficie": new FormControl(100, [Validators.min(9)]),
        "type": new FormControl("bungalow"),
        "indoorQuality": new FormControl(5),
    });

featureList.forEach(value => config.addControl(value, new FormControl(false)));

export { config };