<template>
    <div class="page-tabs">
        <button id="btn_tab_left" class="text_color_gray"><i class="fa fa-backward"></i></button>
        <div id="page-tabs-width">
            <div id="page-tabs-a" class="navside_anim" style="margin-left: 0px;">
                <a ng-repeat="link in _pages track by $index" href="/" ng-class="{'current':current_url==link.url}" class="current">
                    <i class="fa fa-th-large"></i>主页
                    <i ng-show="$index!=0" class="page-tabs-close fa fa-times-circle ng-hide" ng-click="page_close($event,$index)"></i>
                </a>
            </div>
        </div>
        <button id="btn_tab_right" class="text_color_gray"><i class="fa fa-forward"></i></button>
    </div>
</template>