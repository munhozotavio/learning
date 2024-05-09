import time


def calculate_product_on(nums):
  pref, suff = [1], [1]
  array_size = len(nums) - 1

  # fill prefix product array
  for i in range(array_size-1, -1, -1):
    pref.insert(0, pref[0]*nums[i+1])

  # fill suffix product array
  for i in range(1, array_size+1):
    suff.append(suff[i-1]*nums[i-1])

  # calculate product
  product = [pref[i]*suff[i] for i in range(array_size+1)]
  return(product)





def calculate_product_on2(nums):
  product = []
  array_size = len(nums)
  for i in range(array_size):
    product.append(1)
    for j in range(array_size):
      if (i != j):
        product[i] *= nums[j]

  return product






def main():
  nums = [i for i in range(1, 1000)]
  start = time.time()
  product1 = calculate_product_on(nums)
  end = time.time()
  print(f"Time taken by O(N) function: {end-start}")
  start = time.time()
  product2 = calculate_product_on2(nums)
  end = time.time()
  print(f"Time taken by O(N2) function: {end-start}")

  #print(product1)
  #print(product2)




main()
