#pragma checksum "D:\Source\LearnDemo\MQTTApp\MQTTApp\MQTTApp\Pages\Index2.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "cd42a4ce07a786ce9a5293d9db9e19cdb5e9931d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(MQTTAppWeb.Pages.Pages_Index2), @"mvc.1.0.razor-page", @"/Pages/Index2.cshtml")]
namespace MQTTAppWeb.Pages
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\Source\LearnDemo\MQTTApp\MQTTApp\MQTTApp\Pages\_ViewImports.cshtml"
using MQTTAppWeb;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"cd42a4ce07a786ce9a5293d9db9e19cdb5e9931d", @"/Pages/Index2.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"4f2e18d841b07503337093fe910eb20edb151b45", @"/Pages/_ViewImports.cshtml")]
    public class Pages_Index2 : global::Microsoft.AspNetCore.Mvc.RazorPages.Page
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#nullable restore
#line 3 "D:\Source\LearnDemo\MQTTApp\MQTTApp\MQTTApp\Pages\Index2.cshtml"
  
    ViewData["Title"] = "Home page";

#line default
#line hidden
#nullable disable
            WriteLiteral(@"
<div style=""margin-bottom:5px;"">
    room no: <input type=""text""  id=""txtRoomNo"" value=""8888""/> <button id=""btnJoin"">join room</button> <button id=""btnLeave"">leave room</button>
</div>
<div style=""margin-bottom:5px;"">
    nick name: <input type=""text"" id=""txtNickName"" value=""batman"" /> 
</div>
<div style=""height:300px;width:600px"">
    <textarea style=""height:100%;width:100%"" id=""msgList""></textarea>
    <div style=""text-align: right"">
        <input type=""text"" id=""txtMsg""");
            BeginWriteAttribute("value", " value=\"", 545, "\"", 553, 0);
            EndWriteAttribute();
            WriteLiteral(" />  <button id=\"btnSend\">send</button>\n    </div>\n</div>\n");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IndexModel> Html { get; private set; }
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel> ViewData => (global::Microsoft.AspNetCore.Mvc.ViewFeatures.ViewDataDictionary<IndexModel>)PageContext?.ViewData;
        public IndexModel Model => ViewData.Model;
    }
}
#pragma warning restore 1591
