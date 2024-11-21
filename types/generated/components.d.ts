import type { Schema, Struct } from '@strapi/strapi';

export interface BathroomBathroom extends Struct.ComponentSchema {
  collectionName: 'components_bathroom_bathrooms';
  info: {
    description: '';
    displayName: 'bathroom';
  };
  attributes: {
    list: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['WC', 'Shower']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    photos: Schema.Attribute.Media<'images' | 'files', true>;
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

export interface KitchenKitchen extends Struct.ComponentSchema {
  collectionName: 'components_kitchen_kitchens';
  info: {
    description: '';
    displayName: 'kitchen';
  };
  attributes: {
    list: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Plates and cutlery', 'Microwave']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    photos: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface LivingRoomLivingRoom extends Struct.ComponentSchema {
  collectionName: 'components_living_room_living_rooms';
  info: {
    description: '';
    displayName: 'livingRoom';
  };
  attributes: {
    list: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['TV', 'Sofa']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    photos: Schema.Attribute.Media<'images' | 'files', true>;
  };
}

export interface RoomsRooms extends Struct.ComponentSchema {
  collectionName: 'components_rooms_rooms';
  info: {
    description: '';
    displayName: 'rooms';
    icon: 'apps';
  };
  attributes: {
    list: Schema.Attribute.JSON &
      Schema.Attribute.CustomField<
        'plugin::multi-select.multi-select',
        ['Single bed', 'Single bed x2', 'Double bed', 'Sofa bed']
      > &
      Schema.Attribute.DefaultTo<'[]'>;
    name: Schema.Attribute.String;
    photos: Schema.Attribute.Media<'files' | 'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'bathroom.bathroom': BathroomBathroom;
      'discount.discount': DiscountDiscount;
      'kitchen.kitchen': KitchenKitchen;
      'living-room.living-room': LivingRoomLivingRoom;
      'rooms.rooms': RoomsRooms;
    }
  }
}
