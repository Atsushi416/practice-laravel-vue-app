<template>
    <div class="container">
        <div class="card-header" v-text="title"></div>

        <div class="btn-wrap" v-for="(list, index) in lists" :key="list.id">
            <div class="file-download-btn">
                <div class="file-icon">
                    <i class="far fa-file-excel"></i>
                </div>
                <div class="file-name" title="ダウンロード">{{ index }}ファイル名ファイル名ファイル名.xlsx</div>
                <div class="file-download-icon">
                    <i class="fas fa-download" title="ダウンロード"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';

export default {
    data() {
        return {
            title: 'Practice Laravel Vue App',
            lists: [
                { id: 1, title: 'たいとる１' },
                { id: 2, title: 'たいとる2' },
            ]
        }
    },
    mounted() {
        console.log('Component mounted.', this)
    }
}
</script>

<style scoped>
.btn-wrap {
    width: 260px;
    padding: 10px;
    border: solid 1px #333;
}

.file-download-btn {
    padding: 5px;
    border: solid 2px #333;
    display: flex;
    align-items: center;
}
.file-icon {
    padding: 5px;
    font-size: 32px;
}
.file-name {
    padding: 5px;
    cursor: pointer;
}
.file-download-icon {
    padding: 10px;
    border-left: dashed 1px #333;
    font-size: 20px;
    cursor: pointer;
}
</style>