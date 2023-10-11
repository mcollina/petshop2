import type { PlatformaticApp, PlatformaticDBMixin, PlatformaticDBConfig, Entity, Entities, EntityHooks } from '@platformatic/db'
import { EntityTypes, Customer,Inventory,Order,Shipment } from './types'

declare module 'fastify' {
  interface FastifyInstance {
    getSchema<T extends 'Customer' | 'Inventory' | 'Order' | 'Shipment'>(schemaId: T): {
      '$id': string,
      title: string,
      description: string,
      type: string,
      properties: {
        [x in keyof EntityTypes[T]]: { type: string, nullable?: boolean }
      },
      required: string[]
    };
  }
}

interface AppEntities extends Entities {
  customer: Entity<Customer>,
    inventory: Entity<Inventory>,
    order: Entity<Order>,
    shipment: Entity<Shipment>,
}

interface AppEntityHooks {
  addEntityHooks(entityName: 'customer', hooks: EntityHooks<Customer>): any
    addEntityHooks(entityName: 'inventory', hooks: EntityHooks<Inventory>): any
    addEntityHooks(entityName: 'order', hooks: EntityHooks<Order>): any
    addEntityHooks(entityName: 'shipment', hooks: EntityHooks<Shipment>): any
}

declare module 'fastify' {
  interface FastifyInstance {
    platformatic: PlatformaticApp<PlatformaticDBConfig> &
      PlatformaticDBMixin<AppEntities> &
      AppEntityHooks
  }
}
