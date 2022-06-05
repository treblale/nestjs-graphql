
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateListingInput {
    signer: string;
    collection: string;
    tokenId: number;
    price: number;
    startTime: number;
    endTime: number;
}

export class UpdateListingInput {
    id: number;
}

export class Listing {
    id: number;
    signer: string;
    collection: string;
    tokenId: number;
    price: number;
    nonce: number;
    startTime: number;
    endTime: number;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract listings(): Nullable<Listing>[] | Promise<Nullable<Listing>[]>;

    abstract listing(id: number): Nullable<Listing> | Promise<Nullable<Listing>>;
}

export abstract class IMutation {
    abstract createListing(createListingInput: CreateListingInput): Listing | Promise<Listing>;

    abstract updateListing(updateListingInput: UpdateListingInput): Listing | Promise<Listing>;

    abstract removeListing(id: number): Nullable<Listing> | Promise<Nullable<Listing>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
