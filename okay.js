

$("a").click(function(){
    $("body" ).css( "background-color", "red" );
})

var menus=$("<select placeholder='Menu'> </select>");

$(".inner").append(menus);

$(".main-nav a").each(function(){
var hello=$(this);
console.log(hello);

var opt=$("<option></option");
	if (hello.parent().hasClass("selected")){
		opt.prop("selected", true);
		}
		opt.val(hello.attr("href"));
		opt.text(hello.text());
		menus.append(opt);
});


/*$("span").hide();
$("div").append('<button class="rche"> Reveal Cherry </button>');
$("div").append('<button class="rmi"> Reveal Mira </button>');
$("div").append('<button class="hide"> Hide </button>');
//$("div").append('<button class="hmi"> Hide Mira </button>');
$(".rche").click(function(){
	$("span.che").show();
	$("span.mir").hide();
	});
$(".rmi").click(function(){
				$("span.mir").show();
				$("span.che").hide(); });

$(".hide").click(function(){
	$("span").hide(); });
	*/