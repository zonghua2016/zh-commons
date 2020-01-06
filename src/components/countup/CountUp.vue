<template>
<div :id="id"></div>
</template>

<script>
import {
    CountUp
} from 'countup.js'
const typeOf = type => obj => Object.prototype.toString.call(obj) === `[object ${type}]`
const isFunction = typeOf('Function')

export default {
    name: 'CountUp',
    props: {
        id: {
            type: String,
            default: 'countup'
        },
        // 最终数值
        endVal: {
            type: Number,
            default: 0,
            required: true
        },
        delay: {
            type: Number,
            required: false,
            default: 0
        },
        options: {
            type: Object,
            required: false
        }
    },
    data() {
        return {
            countUp: null,
        }
    },
    mounted() {
        // 确保dom加载完毕后 countUp 可用
        this.$nextTick(() => {
            setTimeout(() => {
                if (!this.countUp) {
                    this.countUp = new CountUp(this.id, this.endVal, this.options);
                }
                if (this.countUp.error) {
                    console.error(this.countUp.error);
                }
                if (this.delay < 0) {
                    this.$emit('ready', this.countUp);
                    return;
                }
                setTimeout(() => this.countUp.start(() => this.$emit('ready', this.countUp)), this.delay * 1000);
            }, 10)
        })
    },
    destroyed() {
        this.destroy();
    },
    watch: {
        endVal: {
            handler(val) {
                if (this.countUp && isFunction(this.countUp.update)) {
                    this.countUp.update(val);
                }
            },
            deep: true
        }
    },
    methods: {
        start(cb) {
            if (this.countUp && isFunction(this.countUp.start)) {
                return this.countUp.start(cb);
            }
        },
        reset() {
            if (this.countUp && isFunction(this.countUp.reset)) {
                return this.countUp.reset();
            }
        },
        update(newVal) {
            if (this.countUp && isFunction(this.countUp.update)) {
                return this.countUp.update(newVal);
            }
        },
        pauseResume() {
            if (this.countUp && isFunction(this.countUp.pauseResume)) {
                return this.countUp.pauseResume();
            }
        },
        destroy() {
            this.countUp = null;
        },
    }
}
</script>
