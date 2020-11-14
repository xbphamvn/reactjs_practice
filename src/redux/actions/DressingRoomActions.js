import { RE_DO_ALL, TRY_ON_DRESSES } from "../types/DressingRoomTypes";

export const tryOnDresses = (paneItem) => ({
    type: TRY_ON_DRESSES,
    paneItem
});

export const reDoAll = () => ({
    type: RE_DO_ALL
});