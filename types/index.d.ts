import { Customer } from './Customer'
import { Inventory } from './Inventory'
import { Order } from './Order'
import { Shipment } from './Shipment'
  
interface EntityTypes  {
  Customer: Customer
    Inventory: Inventory
    Order: Order
    Shipment: Shipment
}
  
export { EntityTypes, Customer, Inventory, Order, Shipment }