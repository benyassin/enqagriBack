var mongoose = require('mongoose');
var GeoJSON = require('mongoose-geojson-schema');

var Schema =  mongoose.Schema

var RegionSchema = new Schema({
    name : String,
    id_region : Number,
    geometry: mongoose.Schema.Types.GeoJSON
    
},{ toJSON: { virtuals: true },
    collection: 'region'
});

RegionSchema.virtual('provinces',{
    ref:'Province',
    localField: 'id_region',
    foreignField: 'id_region',
    justOne: false
})

var ProvinceSchema = new Schema({
    name : String,
    id_region : Number,
    id_province: Number,
    geometry: mongoose.Schema.Types.GeoJSON
},{
    collection: 'province'
})

let CommuneSchema = new Schema({
    name : String,
    id_commune : Number,
    id_region : Number,
    id_province: Number,
    geometry: mongoose.Schema.Types.GeoJSON
},{ toJSON: { virtuals: true },
    collection: 'commune'
})

let DpaSchema = new Schema({
    name: String,
})

let OfficeSchema = new Schema({
    name: String,
})
var SegmentSchema = new Schema({
    id : Number,
    area : Number,
    id_region : Number,
    region:String,
    id_province:Number,
    province:String,
    id_commune:Number,
    commune:String,
    geometry:mongoose.Schema.Types.GeoJSON,
},{
    toJSON: { virtuals: true },
    toObject:{ virtuals: true },
    collection: 'segments'
});

var ParcelleSchema = new Schema({
    id : Number,
    area : Number,
    id_region : Number,
    region:String,
    id_province:Number,
    province:String,
    id_commune:Number,
    id_segment:Number,
    commune:String,
    geometry:mongoose.Schema.Types.GeoJSON,
},{
    collection: 'parcelles',
    toJSON: { virtuals: true },
    toObject:{ virtuals: true },
});

SegmentSchema.virtual('parcelles',{
    ref:'Parcelle',
    localField: 'id',
    foreignField: 'id_segment',
    justOne: false    
})

let Region = mongoose.model('Region',RegionSchema);
let Province = mongoose.model('Province',ProvinceSchema);
let Commune = mongoose.model('Commune',CommuneSchema);
let Dpa = mongoose.model('Dpa',DpaSchema);
let Office = mongoose.model('Office',OfficeSchema);
let Segment = mongoose.model('Segment',SegmentSchema);
let Parcelle = mongoose.model('Parcelle',ParcelleSchema);

module.exports = {
    Region:Region,
    Province:Province,
    Commune:Commune,
    Dpa:Dpa,
    Office:Office,
    Segment:Segment,
    Parcelle:Parcelle,
}





