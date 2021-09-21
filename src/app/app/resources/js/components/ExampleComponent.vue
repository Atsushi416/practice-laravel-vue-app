<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        Example Component
                    </div>

                    <nobr>aaaaaaa</nobr>

                    <div class="card-body">
                        I'm an example component.
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    mounted() {
        let item = 1;
        console.log('Component mounted.', item);
    }
};
</script>
