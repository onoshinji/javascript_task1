
$(document).ready(function(){
  function score_indicate(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let sum = 0;
    for(let i=0; i<subject_points.length; i++){
      sum += subject_points[i];
    }
    $("#sum_indicate").text(sum);
    let average = sum / subject_points.length;
    $("#average_indicate").text(average);
  };
  function get_achievement(){
    let averageIndicate = $("#average_indicate").text();
    if ( averageIndicate >= 80){
      return "A";
    } else if ( averageIndicate >= 60) {
      return "B";
    } else if ( averageIndicate >= 40) {
      return "C";
    } else {
      return "D";
    }
  };

  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    let number = subject_points.length;
    let judge = "合格";
    for(let i=0; i<number; i++){
      if(subject_points[i]<60){
        judge= "不合格";
        break;
      }
    }
    return judge;
  };
// 最終的なジャッジのロジックを作ります。
  function judgement(){
    let achievement = get_achievement();
    let pass_or_failure = get_pass_or_failure();
    // 「最終ジャッジ」(id="alert-indicate)ボタンを押したら「あなたの成績は${achievement}で${pass_or_failure}です」が出力される処理です。
  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">あなたの成績は${achievement}で${pass_or_failure}です</label>`);
  };
// [国語の点数,英語の点数,数学の点数,理科の点数,社会の点数]のいずれかの点数が変更された際に「function score_indicate()」を発火させる処理です。
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
// 「ランク」(class="evaluation")ボタンを押したら「get_achievement()」が出力される処理です。
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
// 「判定」(class="btn-judge")ボタンを押したら「function et_pass_or_failure()」が出力される処理です。
  $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
// 「最終ジャッジ」(class="btn-declaration")ボタンを押したら「function judgement()」が出力される処理です。
  $('#btn-declaration').click(function() {
    $("#judge").text(judgement());
  });
});
