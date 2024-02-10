class MessageModel {
  final int? status;
  final List<Datum>? data;
  final String? message;

  MessageModel({
    this.status,
    this.data,
    this.message,
  });

  factory MessageModel.fromJson(Map<String, dynamic> json) => MessageModel(
        status: json["status"],
        data: json["data"] == null
            ? null
            : List<Datum>.from(json["data"]!.map((x) => Datum.fromJson(x))),
        message: json["message"],
      );

  Map<String, dynamic> toJson() => {
        "status": status,
        "data": data == null
            ? []
            : List<dynamic>.from(data!.map((x) => x.toJson())),
        "message": message,
      };
}

class Datum {
  final Context? context;
  final Message? message;
  final DateTime? createdAt;

  Datum({
    this.context,
    this.message,
    this.createdAt,
  });

  factory Datum.fromJson(Map<String, dynamic> json) => Datum(
        context:
            json["context"] == null ? null : Context.fromJson(json["context"]),
        message:
            json["message"] == null ? null : Message.fromJson(json["message"]),
        createdAt: json["created_at"] == null
            ? null
            : DateTime.parse(json["created_at"]),
      );

  Map<String, dynamic> toJson() => {
        "context": context?.toJson(),
        "message": message?.toJson(),
        "created_at": createdAt?.toIso8601String(),
      };
}

class Context {
  final String? domain;
  final String? country;
  final String? city;
  final String? action;
  final String? coreVersion;
  final String? bapId;
  final String? bapUri;
  final String? transactionId;
  final String? messageId;
  final DateTime? timestamp;
  final String? ttl;
  final String? bppId;
  final String? bppUri;

  Context({
    this.domain,
    this.country,
    this.city,
    this.action,
    this.coreVersion,
    this.bapId,
    this.bapUri,
    this.transactionId,
    this.messageId,
    this.timestamp,
    this.ttl,
    this.bppId,
    this.bppUri,
  });

  factory Context.fromJson(Map<String, dynamic> json) => Context(
        domain: json["domain"],
        country: json["country"],
        city: json["city"],
        action: json["action"],
        coreVersion: json["core_version"],
        bapId: json["bap_id"],
        bapUri: json["bap_uri"],
        transactionId: json["transaction_id"],
        messageId: json["message_id"],
        timestamp: json["timestamp"] == null
            ? null
            : DateTime.parse(json["timestamp"]),
        ttl: json["ttl"],
        bppId: json["bpp_id"],
        bppUri: json["bpp_uri"],
      );

  Map<String, dynamic> toJson() => {
        "domain": domain,
        "country": country,
        "city": city,
        "action": action,
        "core_version": coreVersion,
        "bap_id": bapId,
        "bap_uri": bapUri,
        "transaction_id": transactionId,
        "message_id": messageId,
        "timestamp": timestamp?.toIso8601String(),
        "ttl": ttl,
        "bpp_id": bppId,
        "bpp_uri": bppUri,
      };
}

class Message {
  final Catalog? catalog;

  Message({
    this.catalog,
  });

  factory Message.fromJson(Map<String, dynamic> json) => Message(
        catalog:
            json["catalog"] == null ? null : Catalog.fromJson(json["catalog"]),
      );

  Map<String, dynamic> toJson() => {
        "catalog": catalog?.toJson(),
      };
}

class Catalog {
  final List<BppFulfillment>? bppFulfillments;
  final BppDescriptorClass? bppDescriptor;
  final List<BppProvider>? bppProviders;

  Catalog({
    this.bppFulfillments,
    this.bppDescriptor,
    this.bppProviders,
  });

  factory Catalog.fromJson(Map<String, dynamic> json) => Catalog(
        bppFulfillments: json["bpp/fulfillments"] == null
            ? []
            : List<BppFulfillment>.from(json["bpp/fulfillments"]!
                .map((x) => BppFulfillment.fromJson(x))),
        bppDescriptor: json["bpp/descriptor"] == null
            ? null
            : BppDescriptorClass.fromJson(json["bpp/descriptor"]),
        bppProviders: json["bpp/providers"] == null
            ? []
            : List<BppProvider>.from(
                json["bpp/providers"]!.map((x) => BppProvider.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "bpp/fulfillments": bppFulfillments == null
            ? []
            : List<dynamic>.from(bppFulfillments!.map((x) => x.toJson())),
        "bpp/descriptor": bppDescriptor?.toJson(),
        "bpp/providers": bppProviders == null
            ? []
            : List<dynamic>.from(bppProviders!.map((x) => x.toJson())),
      };
}

class BppDescriptorClass {
  final String? name;
  final String? symbol;
  final String? shortDesc;
  final String? longDesc;
  final List<String>? images;
  final String? code;

  BppDescriptorClass({
    this.name,
    this.symbol,
    this.shortDesc,
    this.longDesc,
    this.images,
    this.code,
  });

  factory BppDescriptorClass.fromJson(Map<String, dynamic> json) =>
      BppDescriptorClass(
        name: json["name"],
        symbol: json["symbol"],
        shortDesc: json["short_desc"],
        longDesc: json["long_desc"],
        images: json["images"] == null
            ? []
            : List<String>.from(json["images"]!.map((x) => x)),
        code: json["code"],
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "symbol": symbol,
        "short_desc": shortDesc,
        "long_desc": longDesc,
        "images":
            images == null ? [] : List<dynamic>.from(images!.map((x) => x)),
        "code": code,
      };
}

class BppFulfillment {
  final String? id;
  final Type? type;

  BppFulfillment({
    this.id,
    this.type,
  });

  factory BppFulfillment.fromJson(Map<String, dynamic> json) => BppFulfillment(
        id: json["id"],
        type: typeValues.map[json["type"]]!,
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "type": typeValues.reverse[type],
      };
}

enum Type { DELIVERY, DELIVERY_AND_SELF_PICKUP, SELF_PICKUP }

final typeValues = EnumValues({
  "Delivery": Type.DELIVERY,
  "Delivery and Self-Pickup": Type.DELIVERY_AND_SELF_PICKUP,
  "Self-Pickup": Type.SELF_PICKUP
});

class BppProvider {
  final String? id;
  final BppDescriptorClass? descriptor;
  final ItemTime? time;
  final List<Location>? locations;
  final String? ttl;
  final List<Category>? categories;
  final List<Item>? items;
  final List<Fulfillment>? fulfillments;
  final List<Tag>? tags;

  BppProvider({
    this.id,
    this.descriptor,
    this.time,
    this.locations,
    this.ttl,
    this.categories,
    this.items,
    this.fulfillments,
    this.tags,
  });

  factory BppProvider.fromJson(Map<String, dynamic> json) => BppProvider(
        id: json["id"],
        descriptor: json["descriptor"] == null
            ? null
            : BppDescriptorClass.fromJson(json["descriptor"]),
        time: json["time"] == null ? null : ItemTime.fromJson(json["time"]),
        locations: json["locations"] == null
            ? []
            : List<Location>.from(
                json["locations"]!.map((x) => Location.fromJson(x))),
        ttl: json["ttl"],
        categories: json["categories"] == null
            ? []
            : List<Category>.from(
                json["categories"]!.map((x) => Category.fromJson(x))),
        items: json["items"] == null
            ? []
            : List<Item>.from(json["items"]!.map((x) => Item.fromJson(x))),
        fulfillments: json["fulfillments"] == null
            ? []
            : List<Fulfillment>.from(
                json["fulfillments"]!.map((x) => Fulfillment.fromJson(x))),
        tags: json["tags"] == null
            ? []
            : List<Tag>.from(json["tags"]!.map((x) => Tag.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "descriptor": descriptor?.toJson(),
        "time": time?.toJson(),
        "locations": locations == null
            ? []
            : List<dynamic>.from(locations!.map((x) => x.toJson())),
        "ttl": ttl,
        "categories": categories == null
            ? []
            : List<dynamic>.from(categories!.map((x) => x.toJson())),
        "items": items == null
            ? []
            : List<dynamic>.from(items!.map((x) => x.toJson())),
        "fulfillments": fulfillments == null
            ? []
            : List<dynamic>.from(fulfillments!.map((x) => x.toJson())),
        "tags": tags == null
            ? []
            : List<dynamic>.from(tags!.map((x) => x.toJson())),
      };
}

class Category {
  final String? id;
  final CategoryDescriptor? descriptor;
  final List<Tag>? tags;
  final String? parentCategoryId;

  Category({
    this.id,
    this.descriptor,
    this.tags,
    this.parentCategoryId,
  });

  factory Category.fromJson(Map<String, dynamic> json) => Category(
        id: json["id"],
        descriptor: json["descriptor"] == null
            ? null
            : CategoryDescriptor.fromJson(json["descriptor"]),
        tags: json["tags"] == null
            ? []
            : List<Tag>.from(json["tags"]!.map((x) => Tag.fromJson(x))),
        parentCategoryId: json["parent_category_id"],
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "descriptor": descriptor?.toJson(),
        "tags": tags == null
            ? []
            : List<dynamic>.from(tags!.map((x) => x.toJson())),
        "parent_category_id": parentCategoryId,
      };
}

class CategoryDescriptor {
  final String? name;
  final List<String>? images;

  CategoryDescriptor({
    this.name,
    this.images,
  });

  factory CategoryDescriptor.fromJson(Map<String, dynamic> json) =>
      CategoryDescriptor(
        name: json["name"],
        images: json["images"] == null
            ? []
            : List<String>.from(json["images"]!.map((x) => x)),
      );

  Map<String, dynamic> toJson() => {
        "name": name,
        "images":
            images == null ? [] : List<dynamic>.from(images!.map((x) => x)),
      };
}

class Tag {
  final String? code;
  final List<ListElement>? list;

  Tag({
    this.code,
    this.list,
  });

  factory Tag.fromJson(Map<String, dynamic> json) => Tag(
        code: json["code"],
        list: json["list"] == null
            ? []
            : List<ListElement>.from(
                json["list"]!.map((x) => ListElement.fromJson(x))),
      );

  Map<String, dynamic> toJson() => {
        "code": code,
        "list": list == null
            ? []
            : List<dynamic>.from(list!.map((x) => x.toJson())),
      };
}

class ListElement {
  final String? code;
  final String? value;

  ListElement({
    this.code,
    this.value,
  });

  factory ListElement.fromJson(Map<String, dynamic> json) => ListElement(
        code: json["code"],
        value: json["value"],
      );

  Map<String, dynamic> toJson() => {
        "code": code,
        "value": value,
      };
}

class Fulfillment {
  final Contact? contact;
  final String? id;
  final Type? type;

  Fulfillment({
    this.contact,
    this.id,
    this.type,
  });

  factory Fulfillment.fromJson(Map<String, dynamic> json) => Fulfillment(
        contact:
            json["contact"] == null ? null : Contact.fromJson(json["contact"]),
        id: json["id"] == null ? null : json["id"],
        type: json["type"] == null ? null : typeValues.map[json["type"]]!,
      );

  Map<String, dynamic> toJson() => {
        "contact": contact?.toJson(),
        "id": id,
        "type": typeValues.reverse[type],
      };
}

class Contact {
  final String? phone;
  final String? email;

  Contact({
    this.phone,
    this.email,
  });

  factory Contact.fromJson(Map<String, dynamic> json) => Contact(
        phone: json["phone"],
        email: json["email"],
      );

  Map<String, dynamic> toJson() => {
        "phone": phone,
        "email": email,
      };
}

class Item {
  final String? id;
  final ItemTime? time;
  final String? parentItemId;
  final BppDescriptorClass? descriptor;
  final Quantity? quantity;
  final Price? price;
  final List<String>? categoryIds;
  final String? categoryId;
  final String? locationId;
  final String? fulfillmentId;
  final bool? ondcOrgReturnable;
  final bool? ondcOrgCancellable;
  final bool? ondcOrgAvailableOnCod;
  final String? ondcOrgTimeToShip;
  final bool? ondcOrgSellerPickupReturn;
  final String? ondcOrgReturnWindow;
  final String? ondcOrgContactDetailsConsumerCare;
  final OndcOrgStatutoryReqsPackagedCommodities?
      ondcOrgStatutoryReqsPackagedCommodities;
  final OndcOrgStatutoryReqsPrepackagedFood?
      ondcOrgStatutoryReqsPrepackagedFood;
  final List<Tag>? tags;
  final OndcOrgMandatoryReqsVeggiesFruits? ondcOrgMandatoryReqsVeggiesFruits;

  Item({
    this.id,
    this.time,
    this.parentItemId,
    this.descriptor,
    this.quantity,
    this.price,
    this.categoryIds,
    this.categoryId,
    this.locationId,
    this.fulfillmentId,
    this.ondcOrgReturnable,
    this.ondcOrgCancellable,
    this.ondcOrgAvailableOnCod,
    this.ondcOrgTimeToShip,
    this.ondcOrgSellerPickupReturn,
    this.ondcOrgReturnWindow,
    this.ondcOrgContactDetailsConsumerCare,
    this.ondcOrgStatutoryReqsPackagedCommodities,
    this.ondcOrgStatutoryReqsPrepackagedFood,
    this.tags,
    this.ondcOrgMandatoryReqsVeggiesFruits,
  });

  factory Item.fromJson(Map<String, dynamic> json) => Item(
        id: json["id"],
        time: json["time"] == null ? null : ItemTime.fromJson(json["time"]),
        parentItemId: json["parent_item_id"],
        descriptor: json["descriptor"] == null
            ? null
            : BppDescriptorClass.fromJson(json["descriptor"]),
        quantity: json["quantity"] == null
            ? null
            : Quantity.fromJson(json["quantity"]),
        price: json["price"] == null ? null : Price.fromJson(json["price"]),
        categoryIds: json["category_ids"] == null
            ? []
            : List<String>.from(json["category_ids"]!.map((x) => x)),
        categoryId: json["category_id"],
        locationId: json["location_id"],
        fulfillmentId: json["fulfillment_id"],
        ondcOrgReturnable: json["@ondc/org/returnable"],
        ondcOrgCancellable: json["@ondc/org/cancellable"],
        ondcOrgAvailableOnCod: json["@ondc/org/available_on_cod"],
        ondcOrgTimeToShip: json["@ondc/org/time_to_ship"],
        ondcOrgSellerPickupReturn: json["@ondc/org/seller_pickup_return"],
        ondcOrgReturnWindow: json["@ondc/org/return_window"],
        ondcOrgContactDetailsConsumerCare:
            json["@ondc/org/contact_details_consumer_care"],
        ondcOrgStatutoryReqsPackagedCommodities:
            json["@ondc/org/statutory_reqs_packaged_commodities"] == null
                ? null
                : OndcOrgStatutoryReqsPackagedCommodities.fromJson(
                    json["@ondc/org/statutory_reqs_packaged_commodities"]),
        ondcOrgStatutoryReqsPrepackagedFood:
            json["@ondc/org/statutory_reqs_prepackaged_food"] == null
                ? null
                : OndcOrgStatutoryReqsPrepackagedFood.fromJson(
                    json["@ondc/org/statutory_reqs_prepackaged_food"]),
        tags: json["tags"] == null
            ? []
            : List<Tag>.from(json["tags"]!.map((x) => Tag.fromJson(x))),
        ondcOrgMandatoryReqsVeggiesFruits:
            json["@ondc/org/mandatory_reqs_veggies_fruits"] == null
                ? null
                : OndcOrgMandatoryReqsVeggiesFruits.fromJson(
                    json["@ondc/org/mandatory_reqs_veggies_fruits"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "time": time?.toJson(),
        "parent_item_id": parentItemId,
        "descriptor": descriptor?.toJson(),
        "quantity": quantity?.toJson(),
        "price": price?.toJson(),
        "category_ids": categoryIds == null
            ? []
            : List<dynamic>.from(categoryIds!.map((x) => x)),
        "category_id": categoryId,
        "location_id": locationId,
        "fulfillment_id": fulfillmentId,
        "@ondc/org/returnable": ondcOrgReturnable,
        "@ondc/org/cancellable": ondcOrgCancellable,
        "@ondc/org/available_on_cod": ondcOrgAvailableOnCod,
        "@ondc/org/time_to_ship": ondcOrgTimeToShip,
        "@ondc/org/seller_pickup_return": ondcOrgSellerPickupReturn,
        "@ondc/org/return_window": ondcOrgReturnWindow,
        "@ondc/org/contact_details_consumer_care":
            ondcOrgContactDetailsConsumerCare,
        "@ondc/org/statutory_reqs_packaged_commodities":
            ondcOrgStatutoryReqsPackagedCommodities?.toJson(),
        "@ondc/org/statutory_reqs_prepackaged_food":
            ondcOrgStatutoryReqsPrepackagedFood?.toJson(),
        "tags": tags == null
            ? []
            : List<dynamic>.from(tags!.map((x) => x.toJson())),
        "@ondc/org/mandatory_reqs_veggies_fruits":
            ondcOrgMandatoryReqsVeggiesFruits?.toJson(),
      };
}

class OndcOrgMandatoryReqsVeggiesFruits {
  final String? netQuantity;

  OndcOrgMandatoryReqsVeggiesFruits({
    this.netQuantity,
  });

  factory OndcOrgMandatoryReqsVeggiesFruits.fromJson(
          Map<String, dynamic> json) =>
      OndcOrgMandatoryReqsVeggiesFruits(
        netQuantity: json["net_quantity"],
      );

  Map<String, dynamic> toJson() => {
        "net_quantity": netQuantity,
      };
}

class OndcOrgStatutoryReqsPackagedCommodities {
  final String? manufacturerOrPackerName;
  final String? manufacturerOrPackerAddress;
  final String? commonOrGenericNameOfCommodity;
  final String? monthYearOfManufacturePackingImport;
  final String? netQuantityOrMeasureOfCommodityInPkg;

  OndcOrgStatutoryReqsPackagedCommodities({
    this.manufacturerOrPackerName,
    this.manufacturerOrPackerAddress,
    this.commonOrGenericNameOfCommodity,
    this.monthYearOfManufacturePackingImport,
    this.netQuantityOrMeasureOfCommodityInPkg,
  });

  factory OndcOrgStatutoryReqsPackagedCommodities.fromJson(
          Map<String, dynamic> json) =>
      OndcOrgStatutoryReqsPackagedCommodities(
        manufacturerOrPackerName: json["manufacturer_or_packer_name"],
        manufacturerOrPackerAddress: json["manufacturer_or_packer_address"],
        commonOrGenericNameOfCommodity:
            json["common_or_generic_name_of_commodity"],
        monthYearOfManufacturePackingImport:
            json["month_year_of_manufacture_packing_import"],
        netQuantityOrMeasureOfCommodityInPkg:
            json["net_quantity_or_measure_of_commodity_in_pkg"],
      );

  Map<String, dynamic> toJson() => {
        "manufacturer_or_packer_name": manufacturerOrPackerName,
        "manufacturer_or_packer_address": manufacturerOrPackerAddress,
        "common_or_generic_name_of_commodity": commonOrGenericNameOfCommodity,
        "month_year_of_manufacture_packing_import":
            monthYearOfManufacturePackingImport,
        "net_quantity_or_measure_of_commodity_in_pkg":
            netQuantityOrMeasureOfCommodityInPkg,
      };
}

class OndcOrgStatutoryReqsPrepackagedFood {
  final String? nutritionalInfo;
  final String? additivesInfo;
  final String? brandOwnerFssaiLicenseNo;
  final String? otherFssaiLicenseNo;
  final String? importerFssaiLicenseNo;
  final String? importedProductCountryOfOrigin;

  OndcOrgStatutoryReqsPrepackagedFood({
    this.nutritionalInfo,
    this.additivesInfo,
    this.brandOwnerFssaiLicenseNo,
    this.otherFssaiLicenseNo,
    this.importerFssaiLicenseNo,
    this.importedProductCountryOfOrigin,
  });

  factory OndcOrgStatutoryReqsPrepackagedFood.fromJson(
          Map<String, dynamic> json) =>
      OndcOrgStatutoryReqsPrepackagedFood(
        nutritionalInfo: json["nutritional_info"],
        additivesInfo: json["additives_info"],
        brandOwnerFssaiLicenseNo: json["brand_owner_FSSAI_license_no"],
        otherFssaiLicenseNo: json["other_FSSAI_license_no"],
        importerFssaiLicenseNo: json["importer_FSSAI_license_no"],
        importedProductCountryOfOrigin:
            json["imported_product_country_of_origin"],
      );

  Map<String, dynamic> toJson() => {
        "nutritional_info": nutritionalInfo,
        "additives_info": additivesInfo,
        "brand_owner_FSSAI_license_no": brandOwnerFssaiLicenseNo,
        "other_FSSAI_license_no": otherFssaiLicenseNo,
        "importer_FSSAI_license_no": importerFssaiLicenseNo,
        "imported_product_country_of_origin": importedProductCountryOfOrigin,
      };
}

class Price {
  final String? currency;
  final String? value;
  final String? maximumValue;

  Price({
    this.currency,
    this.value,
    this.maximumValue,
  });

  factory Price.fromJson(Map<String, dynamic> json) => Price(
        currency: json["currency"],
        value: json["value"],
        maximumValue: json["maximum_value"],
      );

  Map<String, dynamic> toJson() => {
        "currency": currency,
        "value": value,
        "maximum_value": maximumValue,
      };
}

class Quantity {
  final Unitized? unitized;
  final Available? available;
  final Available? maximum;

  Quantity({
    this.unitized,
    this.available,
    this.maximum,
  });

  factory Quantity.fromJson(Map<String, dynamic> json) => Quantity(
        unitized: json["unitized"] == null
            ? null
            : Unitized.fromJson(json["unitized"]),
        available: json["available"] == null
            ? null
            : Available.fromJson(json["available"]),
        maximum: json["maximum"] == null
            ? null
            : Available.fromJson(json["maximum"]),
      );

  Map<String, dynamic> toJson() => {
        "unitized": unitized?.toJson(),
        "available": available?.toJson(),
        "maximum": maximum?.toJson(),
      };
}

class Available {
  final String? count;

  Available({
    this.count,
  });

  factory Available.fromJson(Map<String, dynamic> json) => Available(
        count: json["count"],
      );

  Map<String, dynamic> toJson() => {
        "count": count,
      };
}

class Unitized {
  final Radius? measure;

  Unitized({
    this.measure,
  });

  factory Unitized.fromJson(Map<String, dynamic> json) => Unitized(
        measure:
            json["measure"] == null ? null : Radius.fromJson(json["measure"]),
      );

  Map<String, dynamic> toJson() => {
        "measure": measure?.toJson(),
      };
}

class Radius {
  final String? unit;
  final String? value;

  Radius({
    this.unit,
    this.value,
  });

  factory Radius.fromJson(Map<String, dynamic> json) => Radius(
        unit: json["unit"],
        value: json["value"],
      );

  Map<String, dynamic> toJson() => {
        "unit": unit,
        "value": value,
      };
}

class ItemTime {
  final Label? label;
  final DateTime? timestamp;

  ItemTime({
    this.label,
    this.timestamp,
  });

  factory ItemTime.fromJson(Map<String, dynamic> json) => ItemTime(
        label: labelValues.map[json["label"]]!,
        timestamp: json["timestamp"] == null
            ? null
            : DateTime.parse(json["timestamp"]),
      );

  Map<String, dynamic> toJson() => {
        "label": labelValues.reverse[label],
        "timestamp": timestamp?.toIso8601String(),
      };
}

enum Label { ENABLE }

final labelValues = EnumValues({"enable": Label.ENABLE});

class Location {
  final String? id;
  final String? gps;
  final Address? address;
  final LocationTime? time;
  final Circle? circle;

  Location({
    this.id,
    this.gps,
    this.address,
    this.time,
    this.circle,
  });

  factory Location.fromJson(Map<String, dynamic> json) => Location(
        id: json["id"],
        gps: json["gps"],
        address:
            json["address"] == null ? null : Address.fromJson(json["address"]),
        time: json["time"] == null ? null : LocationTime.fromJson(json["time"]),
        circle: json["circle"] == null ? null : Circle.fromJson(json["circle"]),
      );

  Map<String, dynamic> toJson() => {
        "id": id,
        "gps": gps,
        "address": address?.toJson(),
        "time": time?.toJson(),
        "circle": circle?.toJson(),
      };
}

class Address {
  final String? city;
  final String? state;
  final String? areaCode;
  final String? street;
  final String? locality;

  Address({
    this.city,
    this.state,
    this.areaCode,
    this.street,
    this.locality,
  });

  factory Address.fromJson(Map<String, dynamic> json) => Address(
        city: json["city"],
        state: json["state"],
        areaCode: json["area_code"],
        street: json["street"],
        locality: json["locality"],
      );

  Map<String, dynamic> toJson() => {
        "city": city,
        "state": state,
        "area_code": areaCode,
        "street": street,
        "locality": locality,
      };
}

class Circle {
  final String? gps;
  final Radius? radius;

  Circle({
    this.gps,
    this.radius,
  });

  factory Circle.fromJson(Map<String, dynamic> json) => Circle(
        gps: json["gps"],
        radius: json["radius"] == null ? null : Radius.fromJson(json["radius"]),
      );

  Map<String, dynamic> toJson() => {
        "gps": gps,
        "radius": radius?.toJson(),
      };
}

class LocationTime {
  final Label? label;
  final DateTime? timestamp;
  final String? days;
  final Schedule? schedule;
  final Range? range;

  LocationTime({
    this.label,
    this.timestamp,
    this.days,
    this.schedule,
    this.range,
  });

  factory LocationTime.fromJson(Map<String, dynamic> json) => LocationTime(
        label: labelValues.map[json["label"]]!,
        timestamp: json["timestamp"] == null
            ? null
            : DateTime.parse(json["timestamp"]),
        days: json["days"],
        schedule: json["schedule"] == null
            ? null
            : Schedule.fromJson(json["schedule"]),
        range: json["range"] == null ? null : Range.fromJson(json["range"]),
      );

  Map<String, dynamic> toJson() => {
        "label": labelValues.reverse[label],
        "timestamp": timestamp?.toIso8601String(),
        "days": days,
        "schedule": schedule?.toJson(),
        "range": range?.toJson(),
      };
}

class Range {
  final String? start;
  final String? end;

  Range({
    this.start,
    this.end,
  });

  factory Range.fromJson(Map<String, dynamic> json) => Range(
        start: json["start"],
        end: json["end"],
      );

  Map<String, dynamic> toJson() => {
        "start": start,
        "end": end,
      };
}

class Schedule {
  final List<DateTime>? holidays;
  final String? frequency;
  final List<String>? times;
  final Range? range;

  Schedule({
    this.holidays,
    this.frequency,
    this.times,
    this.range,
  });

  factory Schedule.fromJson(Map<String, dynamic> json) => Schedule(
        holidays: json["holidays"] == null
            ? []
            : List<DateTime>.from(
                json["holidays"]!.map((x) => DateTime.parse(x))),
        frequency: json["frequency"],
        times: json["times"] == null
            ? []
            : List<String>.from(json["times"]!.map((x) => x)),
        range: json["range"] == null ? null : Range.fromJson(json["range"]),
      );

  Map<String, dynamic> toJson() => {
        "holidays": holidays == null
            ? []
            : List<dynamic>.from(holidays!.map((x) =>
                "${x.year.toString().padLeft(4, '0')}-${x.month.toString().padLeft(2, '0')}-${x.day.toString().padLeft(2, '0')}")),
        "frequency": frequency,
        "times": times == null ? [] : List<dynamic>.from(times!.map((x) => x)),
        "range": range?.toJson(),
      };
}

class EnumValues<T> {
  Map<String, T> map;
  late Map<T, String> reverseMap;

  EnumValues(this.map);

  Map<T, String> get reverse {
    reverseMap = map.map((k, v) => MapEntry(v, k));
    return reverseMap;
  }
}
