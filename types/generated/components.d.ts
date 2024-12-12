import type { Schema, Struct } from '@strapi/strapi';

export interface AccommodationRooms extends Struct.ComponentSchema {
  collectionName: 'components_accommodation_rooms';
  info: {
    description: '';
    displayName: 'rooms';
    icon: 'apps';
  };
  attributes: {
    beds: Schema.Attribute.Integer;
    guests: Schema.Attribute.Integer;
    rooms: Schema.Attribute.Integer;
    WC: Schema.Attribute.Integer;
  };
}

export interface AddressAddress extends Struct.ComponentSchema {
  collectionName: 'components_address_addresses';
  info: {
    description: '';
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String;
    latitude: Schema.Attribute.String;
    longitude: Schema.Attribute.String;
    postalCode: Schema.Attribute.String;
    street: Schema.Attribute.String;
  };
}

export interface DiscountDiscount extends Struct.ComponentSchema {
  collectionName: 'components_discount_discounts';
  info: {
    displayName: 'discount';
    icon: 'database';
  };
  attributes: {
    days: Schema.Attribute.Integer;
    percentageDiscount: Schema.Attribute.Integer;
  };
}

export interface GalleryGallery extends Struct.ComponentSchema {
  collectionName: 'components_gallery_galleries';
  info: {
    displayName: 'gallery';
    icon: 'picture';
  };
  attributes: {
    name: Schema.Attribute.String;
    photos: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface PricePrice extends Struct.ComponentSchema {
  collectionName: 'components_price_prices';
  info: {
    description: '';
    displayName: 'price';
    icon: 'database';
  };
  attributes: {
    increasePrice: Schema.Attribute.Decimal & Schema.Attribute.Required;
    maxTravelers: Schema.Attribute.Integer & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    travelers: Schema.Attribute.Integer & Schema.Attribute.Required;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accommodation.rooms': AccommodationRooms;
      'address.address': AddressAddress;
      'discount.discount': DiscountDiscount;
      'gallery.gallery': GalleryGallery;
      'price.price': PricePrice;
    }
  }
}
