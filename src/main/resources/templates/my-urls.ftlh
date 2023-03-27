<#import "layouts/main.ftlh" as layout />

<@layout.page role="user">
    <div class="container">
        <div class="title-wrapper">
            <h1>My Urls</h1>
        </div>

        <table>
            <tr>
                <th>Title</th>
                <th>Link</th>
                <th>Default link</th>
                <th>Create</th>
                <th>Clicks</th>
            </tr>
            <tr>
                <td class="title">Row 1, Column 1Row 1, Column 1Row 1, Column 1Row 1, Column 1Row 1, Column 1Row 1, Column 1Row 1, Column 1Row 1, Column 1</td>
                <td class="link">
                    <a href="https://bit.ly/3TFthjY" target="_blank" >https://bit.ly/3TFthjY</a>
                </td>
                <td class="default-link">
                    <a href="https://qldt.ptit.edu.vn/default.aspx?page=dangnhap" target="_blank" >https://qldt.ptit.edu.vn/default.aspx?page=dangnhap</a>
                </td>
                <td>Row 1, Column 3</td>
            </tr>
            <tr>
                <td class="title">
                    <a href="https://bit.ly/3TFthjY" target="_blank" >https://bit.ly/3TFthjY</a>
                </td>
                <td>Row 2, Column 2</td>
                <td>Row 2, Column 3</td>
            </tr>
        </table>
    </div>

</@layout.page>