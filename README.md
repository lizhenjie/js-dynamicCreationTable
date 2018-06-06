# js-dynamicCreationTable
使用javascript动态创建表格

```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link href="https://cdn.bootcss.com/bootstrap/4.1.1/css/bootstrap.css" rel="stylesheet">
    <link href="./mystyle.css" rel="stylesheet">
</head>

<body>

    <div id="table" class="tabpadding hasdata">

    </div>
    <script src="https://cdn.bootcss.com/jquery/3.3.1/jquery.min.js"></script>
    <script src="./template-table.js"></script>
    <script src="./template-td.js"></script>
    <script>
        window.onload = function () {
            //创建thead数组
            var theadArr = new Array();
            //创建td数组
            var tdArr = new Array();
            //创建td
            var tdV = new THtmlTdValue(1, 7, "单样本卡方检验-频率");
            tdArr[0] = tdV;
            theadArr[0] = tdArr;
            var tdArr2 = new Array();
            var tdV1 = new THtmlTdValue(1, 1, "变量");
            tdArr2[0] = tdV1;
            var tdV2 = new THtmlTdValue(1, 1, "");
            tdArr2[1] = tdV2;
            var tdV3 = new THtmlTdValue(1, 1, "观察数");
            tdArr2[2] = tdV3;
            var tdV4 = new THtmlTdValue(1, 1, "期望数");
            tdArr2[3] = tdV4;
            var tdV5 = new THtmlTdValue(1, 1, "残差");
            tdArr2[4] = tdV5;
            var tdV6 = new THtmlTdValue(1, 1, "操作");
            tdArr2[5] = tdV6;
            var tdV7 = new THtmlTdValue(1, 1, "测试");
            tdArr2[6] = tdV7;
            //将td放到thead数组里面
            theadArr[1] = tdArr2;
            //创建table
            var html = new HtmlTable();
            //设置table class
            html.setTableClassName("table table-advance table-right-border text-left");
            //是否隐藏关闭按钮
            html.setShowCloseMenu(true)
           
            //是否显示顶部的表头
            html.setTbTop(false)
            //创建表并插入
            document.getElementById("table").innerHTML = html.createTableTag(html.createtHeadTag(html.createThTag(theadArr)));

        }

    </script>
</body>

</html>
```

执行结果：
------

 <table>
        <tr>
            <th>变量</th>
            <th>观察数</th>
            <th>期望数</th>
            <th>残差</th>
            <th>操作</th>
            <th>测试</th>
        </tr>
  </table>
