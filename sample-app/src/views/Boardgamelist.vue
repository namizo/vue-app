<template>
  <v-container text-xs-center justify-center>
    <v-layout row wrap>
      <v-flex xs12>
        <h1>ボードゲームリスト</h1>
      </v-flex>

      <v-flex xs12 mt-5 justify-center>
        <v-data-table :headers='headers' :items='boardgames'>
          <template v-slot:items="props">
            <td class="text-xs-left">{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.amount }}</td>
            <td class="text-xs-left">{{ props.item.people }}</td>
            <td class="text-xs-left">{{ props.item.remark }}</td>
            <td class="text-xs-left">{{ props.item.play }}</td>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: '名前', value: 'name' },
        { text: '価格', value: 'amount' },
        { text: '人数', value: 'people' },
        { text: '備考', value: 'remark' },
        { text: 'プレイ', value: 'play' }
      ],
      boardgames: [
        {
          name: 'コヨーテ',
          amount: '1717',
          people: '2-10',
          remark: '',
          play: '済'
        },
        {
          name: 'モダンアート',
          amount: '2828',
          people: '3-5',
          remark: 'ライナークニツィア',
          play: '済'
        },
        {
          name: 'ラブレター',
          amount: '1432',
          people: '4',
          remark: '',
          play: '済'
        },
        {
          name: 'インカの黄金',
          amount: '3520',
          people: '3-8',
          remark: '',
          play: '未'
        },
        {
          name: 'アグリコラ',
          amount: '7150',
          people: '4',
          remark: 'ウヴェローゼンベルク',
          play: '済'
        },
        {
          name: 'オーディンの祝祭',
          amount: '12100',
          people: '2-4',
          remark: 'ウヴェローゼンベルク',
          play: '未'
        },
        {
          name: 'ディクシット',
          amount: '3691',
          people: '6',
          remark: '',
          play: '未'
        },
        {
          name: 'テラフォーミングマーズ',
          amount: '1840',
          people: '1-5',
          remark: '',
          play: '未'
        },
        {
          name: 'ごきぶりポーカー',
          amount: '7473',
          people: '2-6',
          remark: '',
          play: '済'
        },
        {
          name: '花火',
          amount: '1331',
          people: '2-5',
          remark: '',
          play: '済'
        },
        {
          name: 'バトルライン',
          amount: '2728',
          people: '2',
          remark: '',
          play: '済'
        },
        {
          name: 'インサイダーゲーム',
          amount: '2420',
          people: '4-8',
          remark: '',
          play: '済'
        }
      ]
    }
  }
}
</script>