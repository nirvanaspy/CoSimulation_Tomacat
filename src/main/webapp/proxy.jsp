<%@ page import="java.util.*" %><%--
  Created by IntelliJ IDEA.
  User: nirvana
  Date: 2019/10/28
  Time: 19:40
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%
    /*String path = request.getContextPath();
    String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getLocalPort() + path + "/";
    String privilege = request.getHeader("privilege ");
    String username = request.getHeader("username");*/
    String tStrDN = request.getHeader("dnname"); //用户证书主题
    if(tStrDN==null){
        tStrDN = "";
    }else{
        tStrDN = new String(tStrDN.getBytes("ISO8859-1"),"GB2312"); //由于DN中可能存在中文,所以对DN进行转码
    }
    String tStrSN = request.getHeader("serialnumber");//用户证书序列号
    if(tStrSN == null){
        tStrSN = "";
    }
    String tStrIssuerDN = request.getHeader("issuerdn");//用户证书颁发者主题
    if(tStrIssuerDN == null){
        tStrIssuerDN = "";
    }else{
        tStrIssuerDN = new String(tStrIssuerDN.getBytes("ISO8859-1"),"GB2312"); //由于IssuerDN中可能存在中文,所以对DN进行转码
    }
    String tStrNotBefore = request.getHeader("notbefore");//证书起始有效期
    if(tStrNotBefore == null){
        tStrNotBefore = "";
    }
    String tStrNotAfter = request.getHeader("notafter");//证书终止有效期
    if(tStrNotAfter == null){
        tStrNotAfter = "";
    }
    String tStrCertCode = request.getHeader("certinfo");//证书Baes64编码
    if(tStrCertCode == null){
        tStrCertCode = "";
    }
    String tStrClientIP = request.getHeader("clientip");//取用户客户端IP
    if(tStrClientIP == null){
        tStrClientIP = "";
    }
    String tStrPrivilege = request.getHeader("privilege");//取用户权限
    if(tStrPrivilege==null){
        tStrPrivilege = "";
    }else{
        tStrPrivilege = new String(tStrPrivilege.getBytes("ISO8859-1"),"GB2312"); //由于权限中可能存在中文,所以对权限信息进行转码
    }
%>
<html>
<head>
    <title>跳转页面</title>
    <meta http-equiv=X-UA-Compatible content="IE=edge,chrome=1">
    <meta name=renderer content=webkit>
    <meta name=viewport content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <link rel="shortcut icon" href=./favicon.ico>
</head>
<body>
<div id=app>
    请稍后,系统正在登录中···
</div>
<script type="text/javascript" src="./es6-promise.js"></script>
<script type="text/javascript" src="./axios.min.js"></script>
<script type="text/javascript">
    function getQueryVariable(str, variable)
    {
        var vars = str.split(",");
        for (var i=0;i<vars.length;i++) {
            var pair = vars[i].split("=");
            if(pair[0] == variable){return pair[1];}
        }
        return(false);
    }

    var docCookies = {
        getItem: function (sKey) {
            return decodeURIComponent(document.cookie.replace(new RegExp('(?:(?:^|.*;)\\s*' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=\\s*([^;]*).*$)|^.*$'), '$1')) || null
        },
        setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
            if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
                return false
            }
            var sExpires = ''
            if (vEnd) {
                switch (vEnd.constructor) {
                    case Number:
                        sExpires = vEnd === Infinity ? '; expires=Fri, 31 Dec 9999 23:59:59 GMT' : '; max-age=' + vEnd
                        break
                    case String:
                        sExpires = '; expires=' + vEnd
                        break
                    case Date:
                        sExpires = '; expires=' + vEnd.toUTCString()
                        break
                }
            }
            document.cookie = encodeURIComponent(sKey) + '=' + encodeURIComponent(sValue) + sExpires + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '') + (bSecure ? '; secure' : '')
            return true
        },
        removeItem: function (sKey, sPath, sDomain) {
            if (!sKey || !this.hasItem(sKey)) {
                return false
            }
            document.cookie = encodeURIComponent(sKey) + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT' + (sDomain ? '; domain=' + sDomain : '') + (sPath ? '; path=' + sPath : '')
            return true
        },
        hasItem: function (sKey) {
            return (new RegExp('(?:^|;\\s*)' + encodeURIComponent(sKey).replace(/[-.+*]/g, '\\$&') + '\\s*\\=')).test(document.cookie)
        },
        keys: /* optional method: you can safely remove it! */ function () {
            var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, '').split(/\s*(?:\=[^;]*)?;\s*/)
            for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
                aKeys[nIdx] = decodeURIComponent(aKeys[nIdx])
            }
            return aKeys
        }
    }

    var CAConfig = '<%=tStrDN%>'
    console.log(CAConfig)

    if(CAConfig) {
        var username = getQueryVariable(CAConfig, 'T')
        if(username) {
            console.log(username)
            var basic = '123456';
            var formData = new FormData();
            formData.append('username', username);
            formData.append('password', basic);
            formData.append('grant_type', 'password');
            formData.append('scope', 'SCOPES');
            formData.append('client_id', 'OAUTH_CLIENT_ID');
            formData.append('enctype', 'OAUTH_CLIENT_ID');

            axios({
                url: 'http://10.120.112.1:8080/oauth/token',
                method: 'post',
                auth: {
                    username: 'OAUTH_CLIENT_ID',
                    password: 'OAUTH_CLIENT_SECRET'
                },
                headers: {
                    'content-type': 'application/x-www-form-urlencoded'
                },
                data: formData
            }).then(function(res) {
                var token = res.data.access_token;
                var reToken = res.data.refresh_token;
                docCookies.setItem('Simulation-Token', token, Infinity, '/');
                docCookies.setItem('RefreshTokenKey', reToken, Infinity, '/');
                docCookies.setItem('username', username, Infinity, '/');
                window.location.href='http://10.120.112.1:8090/CoSimulation/login_result.jsp'
            }).catch(function(err) {
                alert('登录失败')
            } )
        }
    } else {
        console.log('未获取到身份信息！')
    }

</script>
</body>
</html>
