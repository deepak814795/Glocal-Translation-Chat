

import {DocumentData, DocumentReference, Timestamp} from "firebase/firestore"
import {Stripe} from "stripe"

export interface Subscription{
     id?:string;


    metadata: {
        [name: string]: string;
    };
    stripeLink: string;
    role: string | null;
    quantity: number;
    items: Stripe.SubscriptionItem[];

    product: DocumentReference<DocumentData>;

    price: DocumentReference<DocumentData>;

    prices: Array<
        DocumentReference<DocumentData>
    >;

    payment_method?: string;
    latest_invoice?: string;

    status:
       | 'active'
       | 'canceled'
       | 'incomplete'
       | 'incomplete_expired'
       | 'past_due'
       | 'trailing'
       | 'unpaid';

    cancel_at_period_end: boolean;

    created: Timestamp;

    current_period_start: Timestamp;

    current_period_end: Timestamp;

    ended_at: Timestamp | null;

    cancel_at: Timestamp | null;

    canceled_at: Timestamp | null;

    trial_start: Timestamp | null;

    trial_end: Timestamp | null;

}