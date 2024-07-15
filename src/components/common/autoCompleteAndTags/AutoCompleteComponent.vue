<template>
	<div style="width: 40%">
        <vue-simple-suggest
            ref="suggestionsList"
            v-model="chosen"
            :list="data.data"
            :filter-by-query="true"
            :filter="customFilter"
            :display-attribute="data.displayAttribute"
            :value-attribute="data.valueAttribute"
            @select="onSelectEvent">
        <!-- Filter by input text to only show the matching results -->

            <template slot="misc-item-above" slot-scope="{ suggestions }">
                <div align="left" class="misc-item" style="border-bottom: 3px solid;" v-if="suggestions.length > 0">
                    <!-- <span>You're searching for '{{ query }}'.</span> -->
                    <span v-if="isNegative"><b>{{ data.isNegativeLabel }}</b></span>
                    <span v-else-if="!isNegative"><b>{{ data.nonNegativeLabel }}</b></span>
                </div>

                <div class="misc-item" v-if="suggestions.length == 0">
                    <span><b>{{ data.noResultLabel }}</b></span>
                </div>
            </template>

            <div slot="suggestion-item" slot-scope="scope" :title="scope.suggestion.description" v-if="data.boldenSuggestion">
                <div align="left" class="text">
                    <span v-html="boldenSuggestion(scope)"></span>
                </div>
            </div>
        </vue-simple-suggest>

        <div align="left" style="margin-top: 1%">
            <el-tag style="margin-right: 1%" v-for="item in includedTags" :key="item" type="primary" closable @close="handleCloseTag(item)">{{ item }}</el-tag>
            <el-tag style="margin-right: 1%" v-for="item in excludedTags" :key="item" type="danger" closable @close="handleCloseTag(item)">{{ item }}</el-tag>
        </div>
	</div>
</template>

<script>
    import VueSimpleSuggest from 'vue-simple-suggest'
    import 'vue-simple-suggest/dist/styles.css' // Optional CSS

	export default {
		props: ["data"],
		components: {
            VueSimpleSuggest
		},
		data() {
			return {
                chosen: '',
                loading: false,
                isNegative: false,
                includedTags: [],
                excludedTags: []
			};
		},
		methods: {
            boldenSuggestion(scope) {
                if (!scope) return scope;

                const { suggestion, query } = scope;

                let result = this.$refs.suggestionsList.displayProperty(suggestion);

                if (!query) return result;

                const texts = query.split(/[\s-_/\\|\.]/gm).filter(t => !!t) || [''];
                return result.replace(new RegExp('(.*?)(' + texts.join('|') + ')(.*?)','gi'), '$1<b style="color: red;">$2</b>$3');
            },
            onSelectEvent(item) {
                if(item.minusFlag == 'true') {
                    this.excludedTags.push(item.keyWord);
                }
                else {
                    this.includedTags.push(item.keyWord);
                }
            },
            customFilter(items , text) {
                let obj = {};
                let word = items.word.toLowerCase();
                let keyword = text.toLowerCase();

                if(text[0] == "-") {
                    this.isNegative = true;
                    if(items.minusFlag == 'true' && word.indexOf(keyword) >= 0) {
                        obj = items
                    }
                    else {
                        return;
                    }
                }
                else {
                    this.isNegative = false;
                    if(items.minusFlag == 'false' && word.indexOf(keyword) >= 0) {
                        obj = items
                    }
                    else {
                        return;
                    }
                }

                return obj;
            },
            handleCloseTag(tag) {
                if(this.includedTags.includes(tag)) {
                    this.includedTags.splice(this.includedTags.indexOf(tag),1);
                }
                else if(this.excludedTags.includes(tag)) {
                    this.excludedTags.splice(this.excludedTags.indexOf(tag),1);
                }
            }
			// emitToParent() {
			// 	this.$emit("returnGroupCodeId", this.selectedValue);
			// },
		},
	};
</script>
