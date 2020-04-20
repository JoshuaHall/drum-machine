type KeyChar = "Q" | "W" | "E" | "A" | "S" | "D" | "Z" | "X" | "C";

export interface DrumPadData {
    key: KeyChar;
    keyCode: number;
    id: string;
    url: string;
}