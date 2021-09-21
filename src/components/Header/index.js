import React, { useState, useEffect } from "react";
import "./index.less";

import moment from "moment";
import { useSelector,useDispatch } from "react-redux";
import { getRequest } from "../../api/ajax";
import { logout as logoutAction } from "../../redux/actions";
import baoxue from "./img/baoxue.png";
import baoyu from "./img/baoyu.png";
import bingyu from "./img/bingyu.png";
import cloud from "./img/cloud.png";
import dabaoyu from "./img/dabaoyu.png";
import daxue from "./img/daxue.png";
import dayu from "./img/dayu.png";
import fuchen from "./img/fuchen.png";
import leizhenyu from "./img/leizhenyu.png";
import lzybybb from "./img/lzybybb.png";
import qiangshachenbao from "./img/qiangshachenbao.png";
import shachengbao from "./img/shachengbao.png";
import sun from "./img/sun.png";
import tedabaoyu from "./img/tedabaoyu.png";
import wu from "./img/wu.png";
import yangsha from "./img/yangsha.png";
import yin from "./img/yin.png";
import zhenxue from "./img/zhenxue.png";
import zhenyu from "./img/zhenyu.png";
import zhongxue from "./img/zhongxue.png";
import zhongyu from "./img/zhongyu.png";
import xiaoxue from "./img/xiaoxue.png";
import xiaoyu from "./img/xiaoyu.png";

const getImage = (weather) => {
  if (weather.indexOf("雨夹雪") >= 0) return bingyu;
  if (weather.indexOf("雷阵雨") >= 0) return leizhenyu;
  if (weather.indexOf("雷阵雨伴冰雹") >= 0) return lzybybb;
  if (weather.indexOf("晴到多云") >= 0) return cloud;
  if (weather.indexOf("暴雪") >= 0) return baoxue;
  if (weather.indexOf("暴雨") >= 0) return baoyu;
  if (weather.indexOf("暴雨到大暴雨") >= 0) return dabaoyu;
  if (weather.indexOf("大暴雨") >= 0) return dabaoyu;
  if (weather.indexOf("大暴雨到特大暴雨") >= 0) return dabaoyu;
  if (weather.indexOf("大雪") >= 0) return daxue;
  if (weather.indexOf("大雪到暴雪") >= 0) return daxue;
  if (weather.indexOf("中雨") >= 0) return zhongyu;
  if (weather.indexOf("中雨到大雨") >= 0) return dayu;
  if (weather.indexOf("中雪") >= 0) return zhongxue;
  if (weather.indexOf("中雪到大雪") >= 0) return zhongxue;
  if (weather.indexOf("冻雨") >= 0) return bingyu;
  if (weather.indexOf("多云") >= 0) return yin;
  if (weather.indexOf("大雨") >= 0) return dayu;
  if (weather.indexOf("大雨到暴雨") >= 0) return baoyu;
  if (weather.indexOf("小雨") >= 0) return xiaoyu;
  if (weather.indexOf("小雨到中雨") >= 0) return xiaoyu;
  if (weather.indexOf("小雪") >= 0) return xiaoxue;
  if (weather.indexOf("小雪到中雪") >= 0) return xiaoxue;
  if (weather.indexOf("强沙尘暴") >= 0) return qiangshachenbao;
  if (weather.indexOf("扬沙") >= 0) return yangsha;
  if (weather.indexOf("晴") >= 0) return sun;
  if (weather.indexOf("沙尘暴") >= 0) return shachengbao;
  if (weather.indexOf("浮尘") >= 0) return fuchen;
  if (weather.indexOf("特大暴雨") >= 0) return tedabaoyu;
  if (weather.indexOf("阴") >= 0) return yin;
  if (weather.indexOf("阵雨") >= 0) return zhenyu;
  if (weather.indexOf("阵雪") >= 0) return zhenxue;
  if (weather.indexOf("雾") >= 0) return wu;
};

const Header = () => {
  
  return (
    <div className="header">
      header
    </div>
  );
};

export default Header;
