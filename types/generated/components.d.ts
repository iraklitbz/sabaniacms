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
    displayName: 'address';
    icon: 'pinMap';
  };
  attributes: {
    city: Schema.Attribute.String;
    postalPode: Schema.Attribute.String;
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

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'accommodation.rooms': AccommodationRooms;
      'address.address': AddressAddress;
      'discount.discount': DiscountDiscount;
      'gallery.gallery': GalleryGallery;
    }
  }
}
