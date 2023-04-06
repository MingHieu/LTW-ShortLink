<#import "layouts/main.ftlh" as layout />

<@layout.page role="user">
  <div class="container">
    <h1>Amount</h1>

    	<section>
		<div class="filter">
			<label for="start-date">Start Date:</label>
			<input type="date" id="start-date" name="start-date">
			<label for="end-date">End Date:</label>
			<input type="date" id="end-date" name="end-date">
			<button type="submit">Filter</button>
		</div>
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Product</th>
					<th>Commission Rate</th>
					<th>Earnings</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>2023-03-01</td>
					<td>Product A</td>
					<td>10%</td>
					<td>$50.00</td>
				</tr>
				<tr>
					<td>2023-03-05</td>
					<td>Product B</td>
					<td>15%</td>
					<td>$75.00</td>
				</tr>
				<tr>
					<td>2023-03-10</td>
					<td>Product C</td>
					<td>12%</td>
					<td>$60.00</td>
				</tr>
				<tr>
					<td>2023-03-15</td>
					<td>Product D</td>
					<td>8%</td>
					<td>$40.00</td>
				</tr>
				<tr>
					<td>2023-03-20</td>
					<td>Product E</td>
					<td>20%</td>
					<td>$100.00</td>
				</tr>
			</tbody>
			<!-- <tfoot>
				<tr>
					<td colspan="3">Total Earnings:</td>
					<td>$325.00</td>
				</tr>
			</tfoot> -->
		</table>
	</section>























<!-- 
    <table>
        <tr>
            <th>STT</th>
            <th>Link</th>
            <th>Earn ($)</th>
        </tr>
        <tr>
            <td>1</td>
            <td>
                <a href="">Link</a>
            </td>
            <td class="link">
                <span>10.000 <i class="fa-sharp fa-solid fa-dollar-sign"></i></span>
            </td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </table> -->
    </div>
</@layout.page>