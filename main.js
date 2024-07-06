/*
42. Trapping Rain Water

Given n non-negative integers representing an elevation map where the width of each bar is 1, 
compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. 
In this case, 6 units of rain water (blue section) are being trapped.

Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9

Constraints:

    n == height.length
    1 <= n <= 2 * 104
    0 <= height[i] <= 105

 */


    function trap(height) {
      // Инициализация переменных
      // Initialize variables
      let left = 0;
      let right = height.length - 1;
      let maxLeft = 0;
      let maxRight = 0;
      let water = 0;
  
      while (left < right) {
          // Обновление максимальной высоты с обоих концов
          // Update the maximum height from both ends
          maxLeft = Math.max(maxLeft, height[left]);
          maxRight = Math.max(maxRight, height[right]);
  
          // Вода, запертая на текущем индексе, равна минимуму максимальной высоты с обоих концов минус высота на текущем индексе
          // The water trapped at the current index is the minimum of the maximum height from both ends minus the height at the current index
          if (maxLeft < maxRight) {
              water += maxLeft - height[left];
              left++;
          } else {
              water += maxRight - height[right];
              right--;
          }
      }
  
      // Вернуть количество воды, которое может быть заперто после дождя
      // Return the amount of water that can be trapped after raining
      return water;
  }

/*

This solution ensures that the algorithm runs in O(n) time complexity and uses O(1) space complexity. 
The two-pointer approach guarantees that the water trapped at each index is correctly calculated.

Это решение гарантирует, что алгоритм работает с временной сложностью O(n) и использует пространственную сложность O(1).
Двухточечный подход гарантирует, что количество воды, задержанной в каждом индексе, рассчитывается правильно.

*/
