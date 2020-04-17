module fgui {

    /**
     * ByteBuffer,目前只实现了读的部分
     * @todo 
     * 写部分
     */
    export class ByteBuffer {
        public static BIG_ENDIAN = "big";
        public static LITTLE_ENDIAN = "little";
        public endian = ByteBuffer.BIG_ENDIAN;
        public stringTable: Array<string> = null;
        public version: number = 0;
        private _buffer: ArrayBuffer;
        public get buffer(): ArrayBuffer {
            return this._buffer;
        }
        private _uint8Array: Uint8Array;
        private _position: number = 0;
        public get position(): number {
            return this._position;
        }
        public set position(pos: number) {
            this._position = pos;
        }

        public get length(): number {
            return this._uint8Array.byteLength;
        }

        public constructor(buffer?: ArrayBuffer | Uint8Array) {
            this._buffer = buffer;
            this._uint8Array = new Uint8Array(buffer);
        }

        private __checkEOF(bytes: number = 1) {
            if (this._position + bytes > this._uint8Array.byteLength) {
                throw (`END OF BUFFER, length=${this._uint8Array.byteLength} position=${this._position + bytes}`);
            }
        }

        public skip(count: number): void {
            this.position += count;
        }

        //////////////////////////////////
        public readUInt8(): number {
            this.__checkEOF();
            let value = this._uint8Array[this._position];
            this._position++;
            return value;
        }

        public readUInt16LE(): number {
            this.__checkEOF(2);
            let a = this._uint8Array;
            let offset = this._position;
            let value = a[offset] | (a[offset + 1] << 8);
            this._position += 2;
            return value;
        }

        public readUInt16BE(): number {
            this.__checkEOF(2);
            let a = this._uint8Array;
            let offset = this._position;
            let value = (a[offset] << 8) | a[offset + 1];
            this._position += 2;
            return value;
        }

        public readUInt32LE(): number {
            this.__checkEOF(4);
            let a = this._uint8Array;
            let offset = this._position;

            let value = ((a[offset]) |
                (a[offset + 1] << 8) |
                (a[offset + 2] << 16)) +
                (a[offset + 3] * 0x1000000);

            this._position += 4;
            return value;
        }

        public readUInt32BE(): number {
            this.__checkEOF(4);
            let a = this._uint8Array;
            let offset = this._position;
            let value = (a[offset] * 0x1000000) +
                ((a[offset + 1] << 16) |
                    (a[offset + 2] << 8) |
                    a[offset + 3]);
            this._position += 4;
            return value;
        }

        public readInt8(): number {
            this.__checkEOF();
            let a = this._uint8Array;
            let offset = this._position;
            let value : number;
            if (!(a[offset] & 0x80)) {
                value = a[offset];
            } else {
                value = ((0xff - a[offset] + 1) * -1);
            }
            this._position++;
            return value;
        }

        public readInt16LE(): number {
            this.__checkEOF(2);
            let a = this._uint8Array;
            let offset = this._position;
            var value = a[offset] | (a[offset + 1] << 8);
            this._position += 2;
            return (value & 0x8000) ? value | 0xFFFF0000 : value;
        }

        public readInt16BE(): number {
            this.__checkEOF(2);
            let a = this._uint8Array;
            let offset = this._position;
            var val = a[offset + 1] | (a[offset] << 8);
            this._position += 2;
            return (val & 0x8000) ? val | 0xFFFF0000 : val;
        }

        public readInt32LE(): number {
            this.__checkEOF(4);
            let a = this._uint8Array;
            let offset = this._position;

            let value =  (a[offset]) |
                (a[offset + 1] << 8) |
                (a[offset + 2] << 16) |
                (a[offset + 3] << 24);

            this._position += 4;
            return value;
        }

        public readInt32BE(): number {
            this.__checkEOF(4);
            let a = this._uint8Array;
            let offset = this._position;

            let value = (a[offset] << 24) |
                (a[offset + 1] << 16) |
                (a[offset + 2] << 8) |
                (a[offset + 3]);
                this._position += 4;
                return value;
        }

        public readFloatLE(): number {
            this.__checkEOF(4);
            let a = this._uint8Array;
            let offset = this._position;
            let value = the3rd.ieee754.read(a, offset, true, 23, 4);
            this._position += 4;
            return value;
        }

        public readFloatBE(): number {
            this.__checkEOF(4);
            let a = this._uint8Array;
            let offset = this._position;
            
            let value = the3rd.ieee754.read(a, offset, false, 23, 4);
            this._position += 4;
            return value;
        }

        public readDoubleLE(): number {
            this.__checkEOF(8);
            let a = this._uint8Array;
            let offset = this._position;
            let value = the3rd.ieee754.read(a, offset, true, 52, 8);
            this._position += 8;
            return value;
        }

        public readDoubleBE(): number {
            this.__checkEOF(8);
            let a = this._uint8Array;
            let offset = this._position;
            let value = the3rd.ieee754.read(a, offset, false, 52, 8);
            this._position += 8;
            return value;
        }
        ///////////////////////////////
       

        public readBool(): boolean {
            return this.readByte() == 1;
        }

        public readUnsignedShort() {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readUInt16BE();
            }
            return this.readUInt16LE();
        }


        public readByte(): number {
            return this.readInt8();
        }

        public readUnsignedByte(): number {
            return this.readUInt8();
        }

        public readUnsignedInt(): number {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readUInt32BE();
            }
            return this.readUInt32LE();
        }

        public readInt(): number {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readInt32BE();
            }
            return this.readInt32LE();
        }

        public readShort() : number {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readInt16BE();
            }
            return this.readInt16LE();
        }

        public readFloat() : number {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readFloatBE();
            }
            return this.readFloatLE();
        }

        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
        protected static MAX_ARGUMENTS_LENGTH = 0x1000;

        protected decodeCodePointsArray(codePoints : number[]) {
     
            let len = codePoints.length
            if (len <= ByteBuffer.MAX_ARGUMENTS_LENGTH) {
                return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
            }

            // Decode in chunks to avoid "call stack size exceeded".
            let res = ''
            let i = 0
            while (i < len) {
                res += String.fromCharCode.apply(String,codePoints.slice(i, i += ByteBuffer.MAX_ARGUMENTS_LENGTH));
            }
            return res;
        }

        /**
         * 读取 UTF8 字符串. 假定字符串的前缀是无符号的短整型(Uint16)（以字节表示长度）
         * @note 非通用接口， 字符串格式必须在 255 个字符之内，并且以0结尾.
         */
        public readUTF() {
            let buf = this._uint8Array;
            let length = this.readUInt16BE();
            let start = this._position;
            let end = this._position + length;
            let res = [];
        
            let i = start;
            while (i < end) {
                let firstByte = buf[i];
                let codePoint = null;
                let bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;

                if (i + bytesPerSequence <= end) {
                    let secondByte, thirdByte, fourthByte, tempCodePoint;

                    switch (bytesPerSequence) {
                        case 1:
                            if (firstByte < 0x80) {
                                codePoint = firstByte;
                            }
                            break
                        case 2:
                            secondByte = buf[i + 1]
                            if ((secondByte & 0xC0) === 0x80) {
                                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
                                if (tempCodePoint > 0x7F) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break
                        case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break
                        case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                                    codePoint = tempCodePoint;
                                }
                            }
                    }
                }

                if (codePoint === null) {
                    // we did not generate a valid codePoint so insert a
                    // replacement char (U+FFFD) and advance only 1 byte
                    codePoint = 0xFFFD;
                    bytesPerSequence = 1;
                } else if (codePoint > 0xFFFF) {
                    // encode to utf16 (surrogate pair dance)
                    codePoint -= 0x10000;
                    res.push(codePoint >>> 10 & 0x3FF | 0xD800)
                    codePoint = 0xDC00 | codePoint & 0x3FF;
                }

                res.push(codePoint);
                i += bytesPerSequence;
            }
     
            this._position = end;
            return this.decodeCodePointsArray(res)
        }

        public readS(): string {
            var index: number = this.readUnsignedShort();
            if (index == 65534) //null
                return null;
            else if (index == 65533)
                return ""
            else
                return this.stringTable[index];
        }

        public readSArray(cnt: number): Array<string> {
            var ret: Array<string> = new Array<string>(cnt);
            for (var i: number = 0; i < cnt; i++)
                ret[i] = this.readS();

            return ret;
        }

        public writeS(value: string): void {
            var index: number = this.readUnsignedShort();
            if (index != 65534 && index != 65533)
                this.stringTable[index] = value;
        }

        public readColor(hasAlpha: boolean = false): number {
            var r: number = this.readUnsignedByte();
            var g: number = this.readUnsignedByte();
            var b: number = this.readUnsignedByte();
            var a: number = this.readUnsignedByte();

            return (hasAlpha ? (a << 24) : 0) + (r << 16) + (g << 8) + b;
        }

        public readChar(): string {
            var i: number = this.readUnsignedShort();
            return String.fromCharCode(i);
        }

        public readBuffer(): ByteBuffer {
            var count: number = this.readUnsignedInt();
            var ba: ByteBuffer = new ByteBuffer(new Uint8Array(this.buffer, this.position, count));
            ba.stringTable = this.stringTable;
            ba.version = this.version;
            this.position += count;
            return ba;
        }

        public seek(indexTablePos: number, blockIndex: number): boolean {
            var tmp: number = this.position;
            this.position = indexTablePos;
            var segCount: number = this.readByte();
            if (blockIndex < segCount) {
                var useShort: boolean = this.readByte() == 1;
                var newPos: number;
                if (useShort) {
                    this.position += 2 * blockIndex;
                    newPos = this.readUnsignedShort();
                }
                else {
                    this.position += 4 * blockIndex;
                    newPos = this.readUnsignedInt();
                }

                if (newPos > 0) {
                    this.position = indexTablePos + newPos;
                    return true;
                }
                else {
                    this.position = tmp;
                    return false;
                }
            }
            else {
                this.position = tmp;
                return false;
            }
        }
    }
}